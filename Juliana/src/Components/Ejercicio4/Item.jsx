const Item = (props) => {

    const {homework} = props;

    return (
            <li>
                {homework.content} 
            </li>
    )
}

export default Item