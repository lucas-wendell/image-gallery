import React from "react";
import FilterButton from "../FilterButton";

const FiltersNavBar: React.FC = () => (
	<nav className="flex gap-2.5 overflow-x-auto w-4/5 scrollbar-thin scrollbar-thumb-pink">
		<FilterButton name={"lucas wendell"} type="secondary" />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
	</nav>
);
export default FiltersNavBar;
