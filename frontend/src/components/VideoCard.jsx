const VideoCard = () => {
  return (
    <div className="cursor-pointer">
      <img
        src="https://picsum.photos/400/220"
        alt="thumbnail"
        className="w-full rounded-xl"
      />

      <div className="mt-3">
        <h3 className="font-semibold">
          Learn React in 30 Minutes
        </h3>

        <p className="text-sm text-gray-600">
          Code With Mayank
        </p>

        <p className="text-sm text-gray-600">
          15K views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;