import React from "react";

type FilterButtonProps = {
	name: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({
	name,
}: FilterButtonProps) => (
	<a className=" bg-transparent-bg text-dark-blue py-2.5 px-3 rounded-lg whitespace-nowrap">
		{name}
	</a>
);

export default FilterButton;
