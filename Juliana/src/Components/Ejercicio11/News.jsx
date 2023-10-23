const News = (props) => {
  const {item} = props
  return (
    <div className="col-3 bg-dark m-2">
      <h4>{item.title}</h4> <hr/> <p>{item.category}</p>
    </div>
  )
}

export default News