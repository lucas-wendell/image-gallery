import React, { useState } from "react";
import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageStatistics from "../ImageStatistics";

type UserInfoProps = {
	views: number;
	likes: number;
	userImageURL: string;
	userName: string;
};

const UserInfo: React.FC<UserInfoProps> = ({
	likes,
	userImageURL,
	userName,
	views,
}) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(() => true);
	};

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				{imageError ? (
					<div
						title="User Profile Picture Not Found"
						aria-label="User Profile Picture Not Found"
						className="w-7 h-7 border border-pink flex items-center justify-center rounded-full"
					>
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
				<ImageStatistics icon={faHeart} statisticValue={likes} />
				<ImageStatistics icon={faEye} statisticValue={views} />
			</div>
		</div>
	);
};

export default UserInfo;
