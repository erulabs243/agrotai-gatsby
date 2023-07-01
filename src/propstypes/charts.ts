export type ChartDataType = {
    x: number;
    y: number;
};

export type DataType = {
    data: ChartDataType[];
};

export type LineChartType = {
    series: DataType[];
}