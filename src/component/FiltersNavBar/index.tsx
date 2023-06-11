import React from "react";
import FilterButton from "../FilterButton";

const FiltersNavBar: React.FC = () => (
	<nav className="flex gap-2.5 overflow-x-auto w-4/5">
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
		<FilterButton name={"lucas wendell"} />
	</nav>
);

export default FiltersNavBar;
