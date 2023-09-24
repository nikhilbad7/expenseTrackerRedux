export const ChartBar = (props) => {

    let barFillHeight='0%';

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%';
    }

    return(
        <div>
            <div>
                <div style={{ height: barFillHeight}}>
                </div>
            </div>
            <div>
                {props.label}
            </div>
        </div>
    )
}