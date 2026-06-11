import FilterBar from "../components/FilterBar";
import VideoCard from "../components/VideoCard";

const Home = () => {
  return (
    <div>
      <FilterBar />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;