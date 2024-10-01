import { getAuthor, getAllAuthors } from '../../api/authors';

const AuthorPage = (props) => {
  return (
    <div>
      <h1>{props.author.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.author.bio }} />
    </div>
  )
}

export async function getStaticPaths() {
  const authors = await getAllAuthors()
  const paths = authors.map((author) => ({
    params: { name: author.name },
  }))

  return { paths, fallback: false }
}


export async function getStaticProps(context) {
  const author = await getAuthor(context.params.name)

  if (!author) {
    return {
      notFound: true,
    }
  }

  return {
    props: { author }
  }
}
export default AuthorPage;