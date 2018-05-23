import React from "react";
import CharacterList from "./CharecterList"
import '../styles/index.css'
import HeroList from "./HeroList";
import SquadStats from "./SquadStats";
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="col-md-4">
                    <CharacterList/>
                </div>
                <div className="col-md-4">
                    <HeroList/>
                </div>
                <div className="col-md-4">
                    <SquadStats/>
                </div>
            </div>
        );
    }
}

export default App;