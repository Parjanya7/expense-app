import { Controller, Get, Param, Post, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello<T>(): T {
    let variable: T;
    variable = <T>this.appService.getHello();
    return variable;
  }
}
