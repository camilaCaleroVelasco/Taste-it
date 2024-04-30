import UserFood from "./UserFood";

const UserFoodList = (props) => { // Accept users array as a prop

    
    return (
        
        <div className="userfoods">
            {props.items.map((userfood) =>
                <UserFood
                    key={userfood.id}
                    id={userfood.id}
                    img={userfood.img}
                    name={userfood.title}
                    text={userfood.description}
                    onEdit={props.onEdit}
                    onRemove={props.onRemove}
                    
                />
            )}

        </div>
    );

}

export default UserFoodList;