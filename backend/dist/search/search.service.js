"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let SearchService = class SearchService {
    async sendDataToGoServer(data) {
        try {
            const response = await axios_1.default.post('http://localhost:8080/process', data);
            return response.data;
        }
        catch (error) {
            console.error('Erro ao enviar dados para o servidor Go:', error.message);
            throw error;
        }
    }
    async saveDataProcessed(data) {
        console.log('aqui', data);
        return;
    }
    async search(searchParams) {
        const processedData = await this.sendDataToGoServer(searchParams);
        await this.saveDataProcessed(processedData);
        return { message: 'Dados da busca salvos com sucesso' };
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)()
], SearchService);
//# sourceMappingURL=search.service.js.map