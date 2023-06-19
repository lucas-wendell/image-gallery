import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ImageProps = {
	views: number;
	likes: number;
	userImageURL: string;
	searchPictureURL: string;
	userName: string;
};

const Image: React.FC<ImageProps> = ({
	views,
	likes,
	userImageURL,
	searchPictureURL,
	userName,
}: ImageProps) => (
	<div className="space-y-2">
		<div className="w-full">
			<img src={searchPictureURL} alt="result image" />
		</div>
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<img
					src={userImageURL}
					alt="user picture"
					className="w-10 h-10 rounded-full"
				/>
				<p>{userName}</p>
			</div>
			<div className="flex items-center gap-2">
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faHeart}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">{likes}</span>
				</div>
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faEye}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">{views}</span>
				</div>
			</div>
		</div>
	</div>
);

export default Image;
