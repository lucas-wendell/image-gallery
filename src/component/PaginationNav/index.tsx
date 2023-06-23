import React, { useState } from "react";

const PaginationNav: React.FC = () => {
	const [actualPage, setActualPage] = useState<number>(2);

	const handleChangeActualPage = (goTo: "next" | "prev") => {
		setActualPage((prevState) => (goTo === "next" ? ++prevState : --prevState));
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
				<button className="border-none bg-transparent text-pink w-8 h-8 transition-all duration-300 ease-in-out hover:bg-pink/20">
					{actualPage - 1}
				</button>
				<button className="border-none bg-pink text-white w-8 h-8 transition-all duration-300 ease-in-out ">
					{actualPage}
				</button>
				<button className="border-none bg-transparent text-pink w-8 h-8 transition-all duration-300 ease-in-out hover:bg-pink/20">
					{actualPage + 1}
				</button>
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
