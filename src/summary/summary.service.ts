import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { SummaryResponseDto } from 'src/dtos/summary.dto';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(private readonly reportService:ReportService) {}

    calculateSummary(): SummaryResponseDto {
        const incomeSummary = this.reportService.getAllReports(ReportType.INCOME).reduce((sum, report) => (sum + report.amount), 0);
        const expenseSummary = this.reportService.getAllReports(ReportType.EXPENSE).reduce((sum, report) => (sum + report.amount), 0);

        return new SummaryResponseDto({ totalIncome: incomeSummary, totalExpense: expenseSummary, netIncome: (incomeSummary - expenseSummary) });
    }
}
