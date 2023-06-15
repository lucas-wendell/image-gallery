import SearchForm from "../../component/SearchForm";
import FilterContextProvider from "../../contexts/FilterContext";

const App: React.FC = () => (
	<>
		<div className="w-screen h-screen">
			<div className="w-screen h-1/6 bg-pink relative">
				<FilterContextProvider>
					<SearchForm />
				</FilterContextProvider>
			</div>
		</div>
	</>
);

export default App;
