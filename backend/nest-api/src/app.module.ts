import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { OdooService } from './odoo/odoo.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, OdooService],
})
export class AppModule {}
