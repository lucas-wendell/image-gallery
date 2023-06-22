import React from "react";

type FilterButtonProps = {
	name: string;
	type?: "primary" | "secondary";
	id: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({
	name,
	type = "primary",
	id,
}: FilterButtonProps) => {
	const styles = {
		primary:
			"text-main-gray hover:text-dark-blue transition-all duration-300 ease-in-out",
		secondary: "bg-transparent-bg text-dark-blue rounded-lg font-bold",
	};
	return (
		<a
			className={`py-2.5 px-3 whitespace-nowrap capitalize cursor-pointer ${styles[type]}`}
			type="button"
			title={name}
			aria-label={name}
			id={id}
		>
			{name}
		</a>
	);
};

export default FilterButton;
