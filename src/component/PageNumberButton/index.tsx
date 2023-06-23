import React from "react";

type PageNumberButtonProps = {
	pageNumber: number;
	variant?: "primary" | "secondary";
};

const PageNumberButton: React.FC<PageNumberButtonProps> = ({
	pageNumber,
	variant = "primary",
}) => {
	const dynamicStyles = {
		primary: "bg-transparent text-pink hover:bg-pink/20",
		secondary: "bg-pink text-white",
	};

	return (
		<button
			className={`border-none w-8 h-8 transition-all duration-300 ease-in-out ${dynamicStyles[variant]}`}
		>
			{pageNumber}
		</button>
	);
};
export default PageNumberButton;
