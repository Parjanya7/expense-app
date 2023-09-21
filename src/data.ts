export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

export interface ReportData {
    amount: number;
    source: string;
}

export let data: Data = {
    report: [{
        id: 'uuid',
        source: 'someSource',
        amount: 5000,
        type: ReportType.INCOME
    }, {
        id: 'uuid2',
        source: 'someOtherSource',
        amount: 15000,
        type: ReportType.INCOME
    }, {
        id: 'uuid3',
        source: 'someDestination',
        amount: 200,
        type: ReportType.EXPENSE
    },{
        id: 'uuid4',
        source: 'someOtherDestination',
        amount: 500,
        type: ReportType.EXPENSE
    }]
};

export interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        type: ReportType;
    }[]
}
