import React from 'react';
import Header from './components/Header';
import HomePageContainer from './containers/HomePageContainer';
import CharacterContainer from "./containers/CharactersContainer"
import './static/styles/index.scss';


function App() {
  return (
    <div className="main-app ">
        <Header/>
        <HomePageContainer/>
        <CharacterContainer/>
    </div>
  );
}

export default App;
