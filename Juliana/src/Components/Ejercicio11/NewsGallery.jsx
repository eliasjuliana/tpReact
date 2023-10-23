import News from "./News"

const NewsGallery = (props) => {
  const {news} = props;

  return (
    <section className="container bg-dark-subtle d-flex justify-content-center">
      <article className="row p-4">
      {news.map((item) => (
            <News key={item.id} item={item} />
      ))}
      </article>

    </section>
  )
}

export default NewsGallery
