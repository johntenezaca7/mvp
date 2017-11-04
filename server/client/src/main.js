import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './topic.js';
import MyNews from './mynews.js';
const axios = require('axios');



export class Page extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            news: []
        };
       
    }
    handleClick(event){
     axios.get('/mynews', {
     
     })
     .then( (response) => {
       
         this.setState({ news: response.data })
         console.log('news', this.state.news)
     })
     .catch( (err) => {
         console.log(err);
     })
        event.preventDefault();
    }
    

    render(){
        return(
            <div>
                <h1>My News</h1> 
                    <button onClick={this.handleClick.bind(this)}>Saved News</button>
                    { this.state.news.map((ele, i) => {
                        return <MyNews mydata={ele} key={ele._id} />
                     })}
                    <Topic />
               
          </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('mount'))