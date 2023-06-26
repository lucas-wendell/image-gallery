import React from "react";

type PageNumberButtonProps = {
	pageNumber: number;
	variant?: "primary" | "secondary";
	onClick: (pageNumber: number) => void;
};

const PageNumberButton: React.FC<PageNumberButtonProps> = ({
	pageNumber,
	variant = "primary",
	onClick,
}) => {
	const dynamicStyles = {
		primary: "bg-transparent text-pink hover:bg-pink/20",
		secondary: "bg-pink text-white",
	};

	return (
		<button
			className={`border-none w-8 h-8 transition-all duration-300 ease-in-out ${dynamicStyles[variant]}`}
			onClick={() => onClick(pageNumber)}
		>
			{pageNumber}
		</button>
	);
};
export default PageNumberButton;
