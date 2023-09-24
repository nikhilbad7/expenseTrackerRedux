export const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div>
            {props.dataPoints.map((dataPoint) => {
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}></ChartBar>
            })}
        </div>
    )
}