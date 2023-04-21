import "./assets/css/App.css";

// Importar los componentes
import Header from "./components/Header";
import PostsList from "./components/PostList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <PostsList />
    </div>
  );
}

export default App;
