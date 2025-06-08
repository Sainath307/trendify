import { useLocation } from 'react-router-dom'
const ArticleViewer = () => {
  const { state } = useLocation()
  const article = state.article
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-4">{article.content}</p>
      <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-500 underline">
        Read Full Article
      </a>
    </div>
  )
}
export default ArticleViewer



v
