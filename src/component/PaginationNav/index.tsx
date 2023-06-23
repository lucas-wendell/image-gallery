import React, { useContext } from "react";
import PageNumberButton from "../PageNumberButton";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";

const PaginationNav: React.FC = () => {
	const { actualPage, changeActualPage } = useContext(ApiConfigContext);

	const handleChangeActualPage = (goTo: "next" | "prev") => {
		if (actualPage === 1 && goTo === "prev") return;
		changeActualPage(goTo);
	};

	return (
		<div className="flex items-center justify-center gap-2 py-4 col-span-full">
			<button
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
				<PageNumberButton
					pageNumber={actualPage === 1 ? actualPage + 2 : actualPage + 1}
				/>
			</div>
			<button
				onClick={() => handleChangeActualPage("next")}
				className="capitalize border-none bg-transparent text-pink p-1 rounded-r-md transition-all duration-300 ease-in-out hover:bg-pink/20"
			>
				next
			</button>
		</div>
	);
};

export default PaginationNav;
