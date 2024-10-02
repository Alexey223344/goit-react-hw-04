import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchInput = event.target.elements.searchInput?.value;
    if (!searchInput.trim()) {
      return toast("Enter text to search for an image", {
        icon: "❌",
        style: { borderRadius: "10px", background: "#948", color: "#fff" },
      });
    }
    onSubmit(searchInput);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
