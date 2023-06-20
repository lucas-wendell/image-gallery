import { createContext, useState } from "react";
import type { Response } from "../../service";
import mock from "./mock";

type Props = {
	children: React.ReactNode;
};

type DataContextType = {
	data: Response | null;
	updateData: (newData: Response) => void;
};

const initialState = {
	data: mock,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	updateData: () => {},
};

export const DataContext = createContext<DataContextType>(initialState);

const DataContextProvider = ({ children }: Props) => {
	const [data, setData] = useState<Response | null>(initialState.data);
	const updateData = (newData: Response) => setData(newData);

	return (
		<DataContext.Provider
			value={{
				data,
				updateData,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
