const FunctionTest = ({title ,author, price,type})=>{
    return(
        <div className="background">
            <h1 className="h1title">
                이번주 베스트셀러
            </h1>
            <img className="area" src="https://image.yes24.com/goods/93513663/XL" alt="test"></img>
            <h1>{title}</h1>

            <div className="listarea">
            <h2>저자 : {author}</h2>
            <h2>판매가 : {price}</h2>
            <h2>구분 : {type}</h2>
            </div>
        </div>

    )
}

export default FunctionTest