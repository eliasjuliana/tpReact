import Item from "./Item";

const List = (props) => {

    const {tasks} = props;

    return (
        <ul>
            {
                tasks.map((task)=>
                    <Item key={task.id} task={task}/>
                )
            }
        </ul>
    )
}

export default List
