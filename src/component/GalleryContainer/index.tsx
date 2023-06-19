import React, { useContext } from "react";
import Image from "../Image";
import { DataContext } from "../../contexts/DataContext";

const GalleryContainer: React.FC = () => {
	const { data } = useContext(DataContext);
	return (
		<div className="grid grid-cols-auto-fill gap-5 px-10 w-full">
			{data &&
				data.hits.map(
					({ views, likes, userImageURL, webformatURL, user, id }) => (
						<Image
							key={id}
							likes={likes}
							views={views}
							searchPictureURL={webformatURL}
							userName={user}
							userImageURL={userImageURL}
						/>
					)
				)}
		</div>
	);
};

export default GalleryContainer;
