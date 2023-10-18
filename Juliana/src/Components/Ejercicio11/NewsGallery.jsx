import News from "./News"

const NewsGallery = (props) => {
  const {news} = props;

  return (
    <section className="container row">
      {news.map((item) => (
            <News key={item.id} item={item} />
      ))}
    </section>
  )
}

export default NewsGallery
