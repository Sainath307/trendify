import { Link } from 'react-router-dom'
const NewsCard = ({ article, index }) => {
  return (
    <Link to={/article/${index}} state={{ article }}>
      <div className="bg-white shadow-md rounded p-4 hover:shadow-lg">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600">{article.description}</p>
        <div className="text-sm text-blue-600 mt-2">{article.source.name}</div>
      </div>
    </Link>
  )
}
export default NewsCard
