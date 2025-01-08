

function FoodComponent({food = 'basicFood'}){
    
    return (
        <>
        <h1>
            가장 좋아하는 음식은 <b className="food">{food}</b>입니다.
        </h1>
        </>
    )

}

export default FoodComponent