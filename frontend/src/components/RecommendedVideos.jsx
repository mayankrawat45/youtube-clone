import { Link } from "react-router-dom";

const recommendedVideos = [
  {
    id: 1,
    title: "Learn React in 30 Minutes",
    thumbnail:
      "https://picsum.photos/300/170?1",
    channel: "Code With Mayank",
  },
  {
    id: 2,
    title: "Node.js Crash Course",
    thumbnail:
      "https://picsum.photos/300/170?2",
    channel: "Code With Mayank",
  },
  {
    id: 3,
    title: "MongoDB Tutorial",
    thumbnail:
      "https://picsum.photos/300/170?3",
    channel: "Code With Mayank",
  },
  {
    id: 4,
    title: "MERN Stack Project",
    thumbnail:
      "https://picsum.photos/300/170?4",
    channel: "Code With Mayank",
  },
];

const RecommendedVideos = () => {
  return (
    <div className="space-y-4">
      {recommendedVideos.map((video) => (
        <Link
          key={video.id}
          to="/"
          className="block"
        >
          <div className="flex gap-3">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-24 w-40 rounded-lg object-cover"
            />

            <div>
              <h3 className="line-clamp-2 text-sm font-medium">
                {video.title}
              </h3>

              <p className="mt-1 text-xs text-gray-600">
                {video.channel}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecommendedVideos;