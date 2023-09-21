import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';

export class CreateReportDto {

    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class ReportResponseDto {
    @Exclude()
    id: string;

    @Exclude()
    amount: number;

    source: string;

    @Expose({ name: 'amount' })
    transforAmount() {
        return this.amount;
    }

    type: ReportType;

    constructor(partial: Partial<ReportResponseDto>) {
        Object.assign(this, partial);
    }
}