import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Image: React.FC = () => (
	<div className="space-y-2">
		<div className="w-full">
			<img
				src="https://pixabay.com/get/g6a2defd24fbf96de2269bb1570070fc2b52d122fe45dacfa802504eabdd1510760169f4099548c669d6e4078ea4026f6477cfc48e1dd6a873c51a865a40fe097_640.jpg"
				alt="result image"
			/>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-2">
				<img
					src="https://cdn.pixabay.com/user/2023/06/10/18-18-53-941_250x250.jpg"
					alt="user picture"
					className="w-10 h-10 rounded-full"
				/>
				<p>Mollyroselee</p>
			</div>
			<div className="flex items-center gap-2">
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faHeart}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">84</span>
				</div>
				<div className="space-x-1 text-gray">
					<FontAwesomeIcon
						icon={faEye}
						className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
					/>
					<span className="text-main-gray font-medium">84</span>
				</div>
			</div>
		</div>
	</div>
);

export default Image;
