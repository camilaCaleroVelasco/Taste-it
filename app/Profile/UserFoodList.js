import UserFood from "./UserFood";

const UserFoodList = (props) => { // Accept users array as a prop

    
    return (
        
        <div className="userfoods">
            {props.items.map((userfood) =>
                <UserFood
                    key={userfood.id}
                    id={userfood.id}
                    img={userfood.img}
                    name={userfood.name}
                    text={userfood.text}
                    
                />
            )}

        </div>
    );

}

export default UserFoodList;