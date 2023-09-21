import { Injectable } from '@nestjs/common';
import { data, ReportType, ReportData } from '../data';
import { ReportResponseDto } from '../dtos/report.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ReportService {
    getAllReports(type: ReportType): ReportResponseDto[] {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
        const report = data.report.filter((report) => report.type === reportType).map(report => new ReportResponseDto(report))
        return report;
      };
    
      getReportById(type: ReportType, id: string): ReportResponseDto {
        const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
        const reportById = data.report.filter((report) => report.type === reportType && report.id === id);
        return new ReportResponseDto(reportById[0]);
      };
    
      createReport(type: ReportType, { amount, source }: ReportData): ReportResponseDto {
        const newReport = {
          id: uuid(),
          amount,
          source,
          type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
        };
    
        data.report.push(newReport);
        return new ReportResponseDto(newReport);
      };
}
