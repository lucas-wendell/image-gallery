export type Response = {
	hits: Array<{
		id: number;
		pageURL: string;
		type: string;
		tags: string;
		previewURL: string;
		previewWidth: number;
		previewHeight: number;
		webformatURL: string;
		webformatWidth: number;
		webformatHeight: number;
		largeImageURL: string;
		imageWidth: number;
		imageHeight: number;
		imageSize: number;
		views: number;
		downloads: number;
		collections: number;
		likes: number;
		comments: number;
		user_id: number;
		user: string;
		userImageURL: string;
	}>;
	total: number;
	totalHits: number;
};

export const getData = async (
	query: string,
	categoryFilter: string
): Promise<Response> => {
	const res = await fetch(
		`https://pixabay.com/api/?key=${
			import.meta.env.VITE_API_KEY
		}&q=${query}&category=${categoryFilter}`
	);
	const data = await res.json();

	return data;
};
