import React from "react";
import Image from "../Image";

const GalleryContainer: React.FC = () => (
	<div className="grid grid-cols-auto-fill gap-5 px-10 w-full">
		<Image />
		<Image />
		<Image />
		<Image />
	</div>
);

export default GalleryContainer;
