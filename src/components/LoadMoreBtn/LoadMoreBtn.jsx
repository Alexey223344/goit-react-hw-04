const LoadMoreBtn = ({ loadMore }) => {
  const handleLoadMore = () => {
    loadMore();
  };
  return (
    <div>
      <button onClick={handleLoadMore} type='button'>
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;