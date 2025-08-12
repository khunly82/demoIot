export interface Data extends BaseData {
    temperature: number;
    humidity: number;
}


export interface BaseData {
    id: number;
    date: string;
}