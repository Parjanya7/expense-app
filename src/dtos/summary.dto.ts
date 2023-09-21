import { IsNumber, IsPositive, IsString, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class SummaryResponseDto {
    @IsNumber()
    @IsNotEmpty()
    totalIncome: number;

    @IsNumber()
    @IsNotEmpty()
    totalExpense: number;

    @IsNumber()
    @IsNotEmpty()
    netIncome: number;

    constructor(partial: Partial<SummaryResponseDto>) {
        Object.assign(this, partial);
    }
}