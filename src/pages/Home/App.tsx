import GalleryContainer from "../../component/GalleryContainer";
import SearchForm from "../../component/SearchForm";
import DataContextProvider from "../../contexts/DataContext";
import FilterContextProvider from "../../contexts/FilterContext";

const App: React.FC = () => (
	<>
		<div className="w-screen h-screen grid grid-rows-auto-fill ">
			<DataContextProvider>
				<div className="w-screen h-2/5 bg-pink relative">
					<FilterContextProvider>
						<SearchForm />
					</FilterContextProvider>
				</div>
				<GalleryContainer />
			</DataContextProvider>
		</div>
	</>
);

export default App;
