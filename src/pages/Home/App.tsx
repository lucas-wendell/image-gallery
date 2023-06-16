import PostContainer from "../../component/PostContainer";
import SearchForm from "../../component/SearchForm";
import FilterContextProvider from "../../contexts/FilterContext";

const App: React.FC = () => (
	<>
		<div className="w-screen h-screen grid grid-rows-2">
			<div className="w-screen h-2/5 bg-pink relative">
				<FilterContextProvider>
					<SearchForm />
				</FilterContextProvider>
			</div>
			<PostContainer />
		</div>
	</>
);

export default App;
