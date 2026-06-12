import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video._id}`}>
            <div className="group cursor-pointer relative">
                <div className="overflow-hidden rounded-xl">
                    <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-black px-1.5 py-0.5 text-xs text-white">
                        12:34
                    </span>
                </div>

                <div className="mt-3 flex gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-white">
                        {video.channelId?.channelName?.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0">
                        <h3 className="line-clamp-2 text-sm font-semibold leading-5">
                            {video.title}
                        </h3>

                        <p className="mt-1 text-sm text-gray-600">
                            {video.channelId?.channelName}
                        </p>

                        <p className="text-sm text-gray-500">
                            {video.views} views • 1 day ago
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;