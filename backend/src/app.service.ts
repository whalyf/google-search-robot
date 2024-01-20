import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SearchClass } from './search.schema';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectModel(SearchClass.name) private SearchClass: Model<SearchClass>,
  // ) {}

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

  // async saveDataProcessed(data: SearchClass) {
  //   console.log('aqui', data);
  //   const newSearch = new this.SearchClass(data);
  //   console.log('ENTROU AQ');
  //   return await newSearch.save();
  // }

  async search(searchParams: Omit<SearchClass, 'dateTime'>): Promise<any> {
    const processedData = await this.sendDataToGoServer(searchParams);
    // await this.saveDataProcessed(processedData);
    console.log(processedData, 'aquiii');
    return { message: 'Dados da busca salvos com sucesso' };
  }
}
