import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchList } from "../actions"
import filmsData from "../services/filmsData";
import HomePage from "../components/HomePage";
import "../components/HomePage/homePage.scss"

class HomePageContainer extends Component {

    componentDidMount() {
        this.props.fetchList()
    }

    render() {
        const dataFilms = this.props.films.data && this.props.films.data.results
        const films = filmsData(dataFilms);

        return(
            <div className="home-page-container">
                <div className="home-page-title">
                    <h1>Star Wars films</h1>
                </div>
                <div className="home-page-content">
                    {
                    films && films.map((item,index) => {
                            return (
                                <HomePage
                                    key={index}
                                    title={item.title}
                                    episode={item.episode}
                                    director={item.director}
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
       films: state.films
    }
}

const mapDispatchToProps = dispatch => ({
    fetchList: () => dispatch(fetchList())
});

HomePageContainer.propTypes = {
    data: PropTypes.array
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer)