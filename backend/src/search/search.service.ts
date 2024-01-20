import { Injectable } from '@nestjs/common';

import axios from 'axios';
import { Search } from './schemas/search.schema';

@Injectable()
export class SearchService {
  async sendDataToGoServer(data: Omit<Search, 'dateTime'>): Promise<Search> {
    try {
      const response = await axios.post('http://localhost:8080/process', data);
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar dados para o servidor Go:', error.message);
      throw error;
    }
  }

  async saveDataProcessed(data: Search) {
    console.log('aqui', data);

    return;
  }

  async search(searchParams: Omit<Search, 'dateTime'>): Promise<any> {
    const processedData = await this.sendDataToGoServer(searchParams);
    await this.saveDataProcessed(processedData);
    return { message: 'Dados da busca salvos com sucesso' };
  }
}
