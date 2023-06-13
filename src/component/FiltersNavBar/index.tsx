import React, { useState } from "react";
import FilterButton from "../FilterButton";

type Categories = Array<{
	name: string;
	id: string;
	isActive: boolean;
}>;

const FiltersNavBar: React.FC = () => {
	const [categories, setCategories] = useState<Categories>([
		{
			name: "backgrounds",
			id: "1",
			isActive: true,
		},
		{
			name: "fashion",
			id: "2",
			isActive: false,
		},
		{
			name: "nature",
			id: "3",
			isActive: false,
		},
		{
			name: "science",
			id: "4",
			isActive: false,
		},
		{
			name: "education",
			id: "5",
			isActive: false,
		},
		{
			name: "feelings",
			isActive: false,
			id: "6",
		},
		{
			name: "health",
			isActive: false,
			id: "7",
		},
		{
			name: "people",
			isActive: false,
			id: "8",
		},
		{
			name: "religion",
			isActive: false,
			id: "9",
		},
		{
			name: "places",
			isActive: false,
			id: "10",
		},
		{
			name: "animals",
			isActive: false,
			id: "11",
		},
		{
			name: "industry",
			isActive: false,
			id: "12",
		},
		{
			name: "computer",
			isActive: false,
			id: "13",
		},
		{
			name: "food",
			isActive: false,
			id: "14",
		},
		{
			name: "sports",
			isActive: false,
			id: "15",
		},
		{
			name: "transportation",
			isActive: false,
			id: "16",
		},
		{
			name: "travel",
			isActive: false,
			id: "17",
		},
		{
			name: "buildings",
			isActive: false,
			id: "18",
		},
		{
			name: "business",
			isActive: false,
			id: "19",
		},
		{
			name: "music",
			isActive: false,
			id: "20",
		},
	]);

	const handleClick = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement;
		const id = target.getAttribute("id");
		if (!id) return;

		setCategories((prevState) =>
			prevState.map((category) =>
				category.id === id
					? { ...category, isActive: true }
					: { ...category, isActive: false }
			)
		);
	};

	return (
		<nav
			className="flex gap-2.5 overflow-x-auto w-4/5 scrollbar-thin scrollbar-thumb-pink"
			onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
				handleClick(e)
			}
		>
			{categories.map(({ name, id, isActive }) => (
				<FilterButton
					key={id}
					name={name}
					id={id}
					type={isActive ? "secondary" : "primary"}
				/>
			))}
		</nav>
	);
};
export default FiltersNavBar;
