import GalleryContainer from "../../component/GalleryContainer";
import SearchForm from "../../component/SearchForm";
import FilterContextProvider from "../../contexts/FilterContext";

const App: React.FC = () => (
	<>
		<div className="w-screen h-screen grid grid-rows-auto-fill ">
			<div className="w-screen h-2/5 bg-pink relative">
				<FilterContextProvider>
					<SearchForm />
				</FilterContextProvider>
			</div>
			<GalleryContainer />
		</div>
	</>
);

export default App;
