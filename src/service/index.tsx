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

type GetData = (
	query: string,
	categoryFilter: string,
	actualPage: number
) => Promise<Response>;

export const getData: GetData = async (query, categoryFilter, actualPage) => {
	const res = await fetch(
		`https://pixabay.com/api/?key=${
			import.meta.env.VITE_API_KEY
		}&q=${query}&category=${categoryFilter}&page=${actualPage}`
	);
	const data = await res.json();

	return data;
};
