import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './topic.js';


export class Page extends React.Component{
 

    render(){
        return(
            <div>
            <h1>My News</h1>
                <Topic />
         
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('mount'))