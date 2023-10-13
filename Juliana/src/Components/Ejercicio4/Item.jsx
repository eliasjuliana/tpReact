const Item = (props) => {

    const {task} = props;

    return (
            <li>
                {task.content} 
            </li>
    )
}

export default Item