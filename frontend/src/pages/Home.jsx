import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import VideoCard from "../components/VideoCard";
import { getAllVideos } from "../api/videoApi";
import { useSearch } from "../context/SearchContext";
import { searchVideos } from "../api/videoApi";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const { searchQuery } = useSearch();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let data;

        if (searchQuery.trim()) {
          data = await searchVideos(searchQuery);
        } else {
          data = await getAllVideos();
        }

        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [searchQuery]);

  return (
    <div>
      <FilterBar />

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;