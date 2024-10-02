const LoadMoreButton = ({ loadMore }) => {
  const handleLoadMore = () => {
    loadMore();
  };
  return (
    <div>
      <button onClick={handleLoadMore} type="button">Load More</button>
    </div>
  );
};
export default LoadMoreButton;
