import React from 'react';
import moment from 'moment';
const axios = require('axios');


class MyNews extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            
        }
 
    }
    handleClick(event){
      
        axios.delete('/remove', {
            value: this.props.mydata._id
        })
        .then( (response) =>{
            console.log(response)
        })
        .catch( (err) => {
            console.log(err);
        })
        event.preventDefault();
    }

    render(){
       
        return(
            <div>
                  <div onClick={this.handleClick.bind(this)}>
                    <h5>{this.props.mydata.title}</h5>
                    <h5>{this.props.mydata.publisher}</h5>
                    <h5>{moment(this.props.mydata.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</h5>
                  </div>
            </div>
        );
    }

}

export default MyNews