import { Controller, Get } from '@nestjs/common';
import { OdooService } from '../odoo/odoo.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly odooService: OdooService) {}

  @Get()
  async findAll() {
    return this.odooService.getProducts();
  }
}