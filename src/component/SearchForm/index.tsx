import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import FiltersNavBar from "../FiltersNavBar";
import FilterContextProvider from "../../contexts/FilterContext";

const SearchForm: React.FC = () => {
	const inputRef = useRef<null | HTMLInputElement>(null);
	const [inputValue, setInputValue] = useState<string>("");
	const [closeBtnVisibility, setCloseBtnVisibility] = useState<boolean>(false);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
	};

	const handleFormClick = () => {
		inputRef.current?.focus();
	};

	const handleInputChange = (event: ChangeEvent) => {
		const actualInputValue = event.target as HTMLInputElement;
		setInputValue(actualInputValue.value);
	};

	const clearInput = () => {
		if (inputRef.current) {
			inputRef.current.value = "";
		}
		setInputValue("");
	};

	useEffect(() => {
		if (inputValue !== "") return setCloseBtnVisibility(true);
		setCloseBtnVisibility(false);
	}, [inputValue]);

	return (
		<div className="flex items-center justify-center flex-col gap-7 w-4/5 h- absolute left-2/4 -translate-x-2/4 top-full -translate-y-2/4 ">
			<form
				className="flex items-center justify-center w-full mt-87px bg-white py-5 px-2.5 rounded-lg shadow-formShadow"
				onSubmit={handleSubmit}
				onClick={handleFormClick}
			>
				<label className="w-full h-full" htmlFor="search">
					<FontAwesomeIcon
						className="mr-2.5 text-gray"
						icon={faMagnifyingGlass}
					/>
					<input
						ref={inputRef}
						className="outline-none bg-transparent placeholder-gray text-dark-blue"
						type="text"
						placeholder="Search..."
						onChange={handleInputChange}
					/>
				</label>
				{closeBtnVisibility && (
					<FontAwesomeIcon
						className="cursor-pointer text-gray"
						icon={faCircleXmark}
						onClick={clearInput}
					/>
				)}
			</form>
			<FilterContextProvider>
				<FiltersNavBar />
			</FilterContextProvider>
		</div>
	);
};

export default SearchForm;
