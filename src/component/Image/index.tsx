import React from "react";
import { motion } from "framer-motion";
import UserInfo from "../UserInfo";

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
}: ImageProps) => (
	<motion.div
		initial={{ x: -200 }}
		whileInView={{ x: 0 }}
		className="space-y-4"
	>
		<a href={pageURL} target="_blank">
			<div className="w-full h-56 rounded-lg overflow-hidden ">
				<div
					className="w-full h-full bg-cover bg-center bg-no-repeat hover:scale-125 transition-all duration-200 ease-in-out"
					style={{ backgroundImage: `url(${searchPictureURL})` }}
				/>
			</div>
		</a>
		<UserInfo
			likes={likes}
			userImageURL={userImageURL}
			userName={userName}
			views={views}
		/>
	</motion.div>
);

export default Image;
