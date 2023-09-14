import React from "react";

class SearchBar extends React.Component{
     
    state = {
        term: ''
    }


    onFormSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state.term) // Gives an error, says 'this' is undefined
        this.props.onSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={ // This is an uncontrolled element component. We want a controlled element component.  
                                // this.onInputChange
                                // (event) => console.log(event.target.value)
                                event => this.setState({term: event.target.value})
                            }
                            
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar