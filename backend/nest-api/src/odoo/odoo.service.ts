import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class OdooService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8069',
      timeout: 5000,
    });
  }

  async getProducts() {
    try {
      const response = await this.client.get('/api/ext/products');
      return response.data;
    } catch (error) {
      console.error('Error calling Odoo:', error);
      throw new InternalServerErrorException('Error consultando Odoo');
    }
  }
}