const VideoCard = ({ video }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        className="h-52 w-full rounded-xl object-cover"
      />

      <div className="mt-3">
        <h3 className="font-semibold">
          {video.title}
        </h3>

        <p className="text-sm text-gray-600">
          {video.channelId?.channelName}
        </p>

        <p className="text-sm text-gray-600">
          {video.views} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;