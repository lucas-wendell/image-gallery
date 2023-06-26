import React, { useContext } from "react";
import Image from "../Image";
import { DataContext } from "../../contexts/DataContext";
import PaginationNav from "../PaginationNav";

const GalleryContainer: React.FC = () => {
	const { data } = useContext(DataContext);
	return (
		<div className="grid grid-cols-auto-fill gap-8 px-10 w-full">
			{data &&
				data.hits.map(
					({ views, likes, userImageURL, webformatURL, user, id, pageURL }) => (
						<Image
							key={id}
							likes={likes}
							views={views}
							searchPictureURL={webformatURL}
							userName={user}
							userImageURL={userImageURL}
							pageURL={pageURL}
						/>
					)
				)}
			<PaginationNav />
		</div>
	);
};

export default GalleryContainer;
