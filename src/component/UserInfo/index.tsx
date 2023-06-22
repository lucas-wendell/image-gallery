import React, { useState } from "react";
import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type UserInfoProps = {
	views: number;
	likes: number;
	userImageURL: string;
	userName: string;
};

const formatNumber = (number: number): string | number => {
	if (number >= 1000 && number < 1_000_000) {
		return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
	} else if (number >= 1_000_000 && number < 1_000_000_000) {
		return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
	} else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
		return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
	} else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
		return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
	} else {
		return number; // is less than 1000
	}
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
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faHeart}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">
						{formatNumber(likes)}
					</span>
				</div>
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faEye}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">
						{formatNumber(views)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
