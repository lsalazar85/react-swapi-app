import React, { Component } from "react";
import Characters from "../components/Characters";
import { connect } from "react-redux";
import { fetchCharacters  } from "../actions"
import charactersList from "../services/charactersList";
import "../components/Characters/characters.scss";


class CharactersContainer extends Component {

    componentDidMount() {
        this.props.charactersList()
    }

    render() {
        const dataCharacters = this.props.characters.list 
        const characters = charactersList(dataCharacters);

        return(
            <div className="character-container">
                <div className="character-title">
                    <h1>Star Wars Characters</h1>
                </div>
                <div className="character-content">
                    {
                        characters && characters.map((item,index) => {
                            return (
                                <Characters
                                    key={index}
                                    name={item.name}
                                    eyes={item.eyes}
                                    gender={item.gender}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
       characters: state.characters
    }
}

const mapDispatchToProps = dispatch => ({
    charactersList: () => dispatch(fetchCharacters())
});

export default connect(mapStateToProps,mapDispatchToProps)(CharactersContainer)