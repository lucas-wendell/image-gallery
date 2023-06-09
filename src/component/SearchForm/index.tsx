import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

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

	useEffect(() => {
		if (inputValue !== "") return setCloseBtnVisibility(true);
		setCloseBtnVisibility(false);
	}, [inputValue]);

	return (
		<form
			className="flex items-center justify-center w-4/5 absolute left-2/4 -translate-x-2/4 bg-red-600 py-5 px-2.5 rounded-lg"
			onSubmit={handleSubmit}
			onClick={handleFormClick}
		>
			<label className="w-full h-full" htmlFor="search">
				<FontAwesomeIcon className="mr-2.5" icon={faMagnifyingGlass} />
				<input
					ref={inputRef}
					className="outline-none bg-transparent"
					type="text"
					placeholder="Search..."
					onChange={handleInputChange}
				/>
			</label>
			{closeBtnVisibility && <FontAwesomeIcon icon={faCircleXmark} />}
		</form>
	);
};

export default SearchForm;
