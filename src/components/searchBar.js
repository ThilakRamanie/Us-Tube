import React from 'react';

class SearchBar extends React.Component {
    state = {search:''}
    onInputChange=(event) => {
        this.setState({search:event.target.value});
    }
    onFormSubmit=(event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.search);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.search}
                        onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;