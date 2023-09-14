import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList'
import Logo from '../media/Logo.png'
import './App.css'

class App extends React.Component{

    state = {
        images: []
    }

    onSearchSubmit = async term => { 
        // Axios returns a response called a promise
        // Promise notifies when out request is complete
        const response =  await unsplash
            .get('/search/photos',{
                params:{
                    query: term
                },
            })
            this.setState({
                images: response.data.results
            })
        }

    render(){
        return(
            <div className="container">
                <img className="website-logo" src={Logo}/>
                <div className="ui container" style={{marginTop: '20px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    Found: {this.state.images.length} images
                    <ImageList images={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default App;