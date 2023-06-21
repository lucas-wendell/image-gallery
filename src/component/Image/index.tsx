import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type ImageProps = {
	views: number;
	likes: number;
	userImageURL: string;
	searchPictureURL: string;
	userName: string;
	pageURL: string;
};

const Image: React.FC<ImageProps> = ({
	views,
	likes,
	userImageURL,
	searchPictureURL,
	userName,
	pageURL,
}: ImageProps) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(() => true);
	};

	return (
		<div className="space-y-4 h-min">
			<a href={pageURL} target="_blank">
				<div className="w-full h-56 rounded-lg overflow-hidden ">
					<div
						className="w-full h-full bg-cover bg-center bg-no-repeat hover:scale-125 transition-all duration-200 ease-in-out"
						style={{ backgroundImage: `url(${searchPictureURL})` }}
					/>
				</div>
			</a>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					{imageError ? (
						<div className="w-7 h-7 border border-pink flex items-center justify-center rounded-full">
							<FontAwesomeIcon icon={faUser} className="w-4 h-4 text-pink" />
						</div>
					) : (
						<img
							src={userImageURL}
							alt="user picture"
							className="w-8 h-8 rounded-full"
							onError={handleImageError}
						/>
					)}
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
};

export default Image;
