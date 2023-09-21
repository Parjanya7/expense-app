import { Controller, Get, Param, Post, Body, HttpCode, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { ReportType } from '../data';
import { CreateReportDto, ReportResponseDto } from '../dtos/report.dto';
import { ReportService } from './report.service';

@Controller('report/:type')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

    @HttpCode(200)
    @Get()
    getAllReports(@Param('type') type: ReportType): ReportResponseDto[] {
      const response = this.reportService.getAllReports(type);
      return response;
    }
  
    @HttpCode(200)
    @Get(':id')
    getReportById(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType, @Param('id', ParseUUIDPipe) id: string): ReportResponseDto {
      const response = this.reportService.getReportById(type, id);
      return response;
    }
  
    @HttpCode(201)
    @Post()
    createReport(@Param('type') type: ReportType, @Body() { amount, source }: CreateReportDto): ReportResponseDto {
      const response = this.reportService.createReport(type, { amount, source });
      return response;
    }
}
