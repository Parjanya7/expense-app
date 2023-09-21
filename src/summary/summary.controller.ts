import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { SummaryResponseDto } from 'src/dtos/summary.dto';

@Controller('summary')
export class SummaryController {
    constructor(private readonly summaryService:SummaryService) {}

    @Get()
    getSummary(): SummaryResponseDto {
        const response = this.summaryService.calculateSummary();
        return response;
    }
}
