import React, { useContext, useEffect, useState } from "react";
import PageNumberButton from "../PageNumberButton";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";
import * as api_config from "../../service/api_config";
import { DataContext } from "../../contexts/DataContext";

const PaginationNav: React.FC = () => {
	const { actualPage, changeActualPage } = useContext(ApiConfigContext);
	const { data } = useContext(DataContext);
	const [pagesNumber, setPagesNumber] = useState(1);

	const handleChangeActualPage = (goTo: "next" | "prev") => {
		if (actualPage === 1 && goTo === "prev") return;
		changeActualPage(goTo);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [actualPage]);

	useEffect(() => {
		if (data) setPagesNumber(data.totalHits / api_config.default.per_page);
	}, [data]);

	return (
		<div className="flex items-center justify-center gap-2 py-4 col-span-full">
			<button
				title="Go To Previous Page"
				aria-label="Go To Previous Page"
				onClick={() => handleChangeActualPage("prev")}
				className="capitalize border-none bg-transparent text-pink p-1 rounded-l-md transition-all duration-300 ease-in-out hover:bg-pink/20"
			>
				prev
			</button>
			<div>
				<PageNumberButton
					pageNumber={actualPage === 1 ? actualPage : actualPage - 1}
					variant={actualPage === 1 ? "secondary" : "primary"}
				/>
				<PageNumberButton
					pageNumber={actualPage === 1 ? actualPage + 1 : actualPage}
					variant={actualPage !== 1 ? "secondary" : "primary"}
				/>
				{pagesNumber + 1 !== actualPage && (
					<PageNumberButton
						pageNumber={actualPage === 1 ? actualPage + 2 : actualPage + 1}
					/>
				)}
			</div>
			<button
				title="Go To Next Page"
				aria-label="Go To Next Page"
				disabled={pagesNumber + 1 === actualPage}
				onClick={() => handleChangeActualPage("next")}
				className="capitalize border-none bg-transparent text-pink p-1 rounded-r-md transition-all duration-300 ease-in-out hover:bg-pink/20"
			>
				next
			</button>
		</div>
	);
};

export default PaginationNav;
