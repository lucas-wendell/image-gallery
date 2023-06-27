import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ImageStaticsProps = {
	icon: IconProp;
	statisticValue: number;
};

const formatNumber = (number: number): string | number => {
	if (number >= 1000 && number < 1_000_000) {
		return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
	} else if (number >= 1_000_000 && number < 1_000_000_000) {
		return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
	} else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
		return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
	} else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
		return (number / 1_000_000_000_000).toFixed(1).replace(/\.0$/, "") + "T";
	} else {
		return number; // is less than 1000
	}
};

const ImageStatistics: React.FC<ImageStaticsProps> = ({
	icon,
	statisticValue,
}) => (
	<div className="flex items-center space-x-1 text-gray">
		<FontAwesomeIcon
			icon={icon}
			className="cursor-pointer hover:text-pink transition-all duration-300 ease-in-out"
		/>
		<span className="text-main-gray font-medium max-sm:text-sm max-xsm:text-xs">
			{formatNumber(statisticValue)}
		</span>
	</div>
);

export default ImageStatistics;
