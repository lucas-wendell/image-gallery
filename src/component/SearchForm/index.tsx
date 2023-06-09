import React, { useContext, useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Response } from "../../service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import FiltersNavBar from "../FiltersNavBar";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";

import { getData } from "../../service";
import { DataContext } from "../../contexts/DataContext";

const SearchForm: React.FC = () => {
	const inputRef = useRef<null | HTMLInputElement>(null);

	const { filter, actualPage } = useContext(ApiConfigContext);
	const { updateData } = useContext(DataContext);

	const [inputValue, setInputValue] = useState<string>("");
	const [closeBtnVisibility, setCloseBtnVisibility] = useState<boolean>(false);

	const [lastSearch, setLastSearch] = useState<string>("");
	const [data, setData] = useState<Response | null>(null);

	useEffect(() => {
		const data = getData(lastSearch, filter, actualPage);
		data.then((res) => {
			setData(res);
		});
	}, [filter, actualPage, lastSearch]);

	useEffect(() => {
		if (data) updateData(data);
	}, [data, updateData]);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const treatedValue = inputValue.trim().replace(/\s/g, "+");
		setLastSearch(treatedValue);
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
		setLastSearch("");
	};

	useEffect(() => {
		if (inputValue !== "") return setCloseBtnVisibility(true);
		setCloseBtnVisibility(false);
	}, [inputValue]);

	return (
		<div className="flex items-center justify-center flex-col gap-7 w-4/5 absolute left-2/4 -translate-x-2/4 top-full -translate-y-2/4 max-sm:w-10/12 ">
			<form
				className="flex items-center justify-center flex-nowrap w-full mt-87px bg-white py-5 px-2.5 rounded-lg shadow-formShadow"
				onSubmit={handleSubmit}
				onClick={handleFormClick}
			>
				<label
					className="flex items-center gap-2.5 w-full h-full"
					htmlFor="search"
				>
					<FontAwesomeIcon className="text-gray" icon={faMagnifyingGlass} />
					<input
						ref={inputRef}
						className="outline-none bg-transparent placeholder-gray text-dark-blue w-full"
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
			<FiltersNavBar />
		</div>
	);
};

export default SearchForm;
