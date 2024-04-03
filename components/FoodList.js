import Food from "./Food";

const FoodList = (props) => { // Accept users array as a prop

    
    return (
        
        <div className="foods">
            {props.items.map((food) =>
                <Food
                    key={food.id}
                    id={food.id}
                    img={food.img}
                    name={food.name}
                    
                />
            )}

        </div>
    );

}

export default FoodList;