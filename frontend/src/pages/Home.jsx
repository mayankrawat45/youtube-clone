import { useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import VideoCard from "../components/VideoCard";
import { getAllVideos, getVideosByCategory } from "../api/videoApi";
import { useSearch } from "../context/SearchContext";
import { searchVideos } from "../api/videoApi";

const Home = () => {
  const [videos, setVideos] = useState([]);

  const { searchQuery } = useSearch();

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let data;

        if (searchQuery.trim()) {
          data = await searchVideos(searchQuery);
        } else if (selectedCategory !== "All") {
          data = await getVideosByCategory(
            selectedCategory
          );
        } else {
          data = await getAllVideos();
        }

        setVideos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

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