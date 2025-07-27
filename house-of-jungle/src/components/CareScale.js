function CareScale({ scaleValue, careType}) {
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div className ='lmj-care-scale'>
            {range.map((rangeElem )=> 
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toSteing()} >{scaleType}</span>
                ) : null)}
        </div>
    )
}

export default CareScale