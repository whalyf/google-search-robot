import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { SaveSearchDto } from './dto/save-search.dto';
import { ISearch } from './interface/search.interface';
import { SearchClass } from './schema/search.schema';


@Injectable()
export class SearchService {
  constructor(@InjectModel(SearchClass.name) private searchModel: Model<ISearch>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async sendDataToGoServer(
    data: Omit<SearchClass, 'dateTime'>,
  ): Promise<SearchClass> {
    try {
      const response = await axios.post('http://localhost:8080/process', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor Go:', error.message);
      throw error;
    }
  }

  async saveDataProcessed(saveSearchDto: SaveSearchDto) {
    console.log('aqui', saveSearchDto);
    const newSearch = new this.searchModel(saveSearchDto);
    console.log('ENTROU AQ');
    return await newSearch.save();
  }

  async search(searchParams: Omit<SearchClass, 'dateTime'>): Promise<any> {
    const processedData = await this.sendDataToGoServer(searchParams);
    // await this.saveDataProcessed(processedData);
    console.log(processedData, 'aquiii');
    return { message: 'Dados da busca salvos com sucesso' };
  }
}
