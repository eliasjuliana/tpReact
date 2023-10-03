import Item from "./Item.jsx";

const List = (props) => {

    const {homeworks} = props;

    return (
        <ul>
            {
                homeworks.map((homework)=>
                    <Item key={homework.id} homework={homework}/>
                )
            }
        </ul>
    )
}

export default List
