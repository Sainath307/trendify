import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchNews } from './api'
import NewsCard from './components/NewsCard'
import SearchBar from './components/SearchBar'
import ArticleViewer from './pages/ArticleViewer'
const App = () => {
  const [news, setNews] = useState([])
  const [query, setQuery] = useState('technology')
  useEffect(() => {
    const load = async () => {
      const data = await fetchNews(query)
      setNews(data)
    }
    load()
  }, [query])
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-4xl mx-auto p-6">
              <SearchBar onSearch={setQuery} />
              <div className="grid gap-4">
                {news.map((a, i) => (
                  <NewsCard key={i} article={a} index={i} />
                ))}
              </div>
            </div>
          }
        />
        <Route path="/article/:id" element={<ArticleViewer />} />
      </Routes>
    </Router>
  )
}
export default App
