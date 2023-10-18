const News = (props) => {
  const {item} = props
  return (
    <article className="col-3">
      <p>{item.title}-{item.category}</p>
    </article>
  )
}

export default News