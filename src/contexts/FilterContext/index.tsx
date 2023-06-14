import { createContext, useState } from "react";

type Props = {
	children: React.ReactNode;
};

type FilterContextType = {
	filter: string;
	changeFilter: (newFilter: string) => void;
};

const initialState = {
	filter: "backgrounds",
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	changeFilter: () => {},
};

export const FilterContext = createContext<FilterContextType>(initialState);

const FilterContextProvider = ({ children }: Props) => {
	const [filter, setFilter] = useState<string>(initialState.filter);
	const changeFilter = (newFilter: string) => setFilter(newFilter);

	return (
		<FilterContext.Provider
			value={{
				filter,
				changeFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContextProvider;
