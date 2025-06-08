const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search tech news..."
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  )
}
export default SearchBar
