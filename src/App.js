import React from "react";
import Header from "./components/header/header";
import AnimeList from "./components/anime-list/anime-list";
import AddForm from "./components/add-form/add-form";
// import Search from './components/search-anime/search-anime';

const App = () => {
  return (
    <div className="container">
      <Header />
      {/* <Search /> */}
      <AddForm />
      <AnimeList />
    </div>
  );
};

export default App;
