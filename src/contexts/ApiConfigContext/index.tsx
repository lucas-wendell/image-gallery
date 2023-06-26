/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

type Props = {
	children: React.ReactNode;
};

type ApiConfigContextType = {
	filter: string;
	changeFilter: (newFilter: string) => void;
	actualPage: number;
	changeActualPage: (action: "next" | "prev") => void;
	setActualPage: (pageNumber: number) => void;
};

const initialState = {
	filter: "backgrounds",
	actualPage: 1,
	changeFilter: () => {},
	changeActualPage: () => {},
	setActualPage: () => {},
};

export const ApiConfigContext =
	createContext<ApiConfigContextType>(initialState);

const ApiConfigContextProvider = ({ children }: Props) => {
	const [filter, setFilter] = useState<string>(initialState.filter);
	const [actualPage, setActualPage] = useState<number>(initialState.actualPage);

	const changeFilter: ApiConfigContextType["changeFilter"] = (newFilter) =>
		setFilter(newFilter);

	const changeActualPage: ApiConfigContextType["changeActualPage"] = (action) =>
		setActualPage((prevState) =>
			action === "next" ? ++prevState : --prevState
		);

	return (
		<ApiConfigContext.Provider
			value={{
				filter,
				changeActualPage,
				changeFilter,
				actualPage,
				setActualPage,
			}}
		>
			{children}
		</ApiConfigContext.Provider>
	);
};

export default ApiConfigContextProvider;
