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
						className="w-7 h-7 border border-pink flex items-center justify-center rounded-full max-xsm:w-6 max-xsm:h-6"
					>
						<FontAwesomeIcon icon={faUser} className="w-3 h-3 text-pink" />
					</div>
				) : (
					<img
						src={userImageURL}
						alt="user picture"
						className="w-8 h-8 rounded-full max-sm:w-7 max-sm:h-7 max-xsm:w-5.5 max-xsm:h-5.5"
						onError={handleImageError}
					/>
				)}
				<p className="max-sm:text-sm max-xsm:text-xs">{userName}</p>
			</div>
			<div className="flex items-center gap-2">
				<ImageStatistics icon={faHeart} statisticValue={likes} />
				<ImageStatistics icon={faEye} statisticValue={views} />
			</div>
		</div>
	);
};

export default UserInfo;
