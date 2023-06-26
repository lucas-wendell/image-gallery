import GalleryContainer from "../../component/GalleryContainer";
import SearchForm from "../../component/SearchForm";

import DataContextProvider from "../../contexts/DataContext";
import ApiConfigContextProvider from "../../contexts/ApiConfigContext";

const App: React.FC = () => (
	<>
		<div className="w-screen h-screen grid grid-rows-auto-fill ">
			<DataContextProvider>
				<ApiConfigContextProvider>
					<div className="w-screen h-2/5 bg-pink relative">
						<SearchForm />
					</div>
					<GalleryContainer />
				</ApiConfigContextProvider>
			</DataContextProvider>
		</div>
	</>
);

export default App;
