import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search.js';

export class Page extends React.Component{
    render(){
        return(
            <Search />
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('mount'))