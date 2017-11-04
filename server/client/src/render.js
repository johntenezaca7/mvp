import React from 'react';
import moment from 'moment';

const axios = require('axios');


class RenderThis extends React.Component {
    constructor(props){
        super(props);

        this.state = {

            showIm : false,
            showSum: false,
            title: this.props.obj.title,
            publisher: this.props.obj.source.name,
            summary: this.props.obj.summary.sentences,
            date: this.props.obj.publishedAt,
            saved: []

        }
    this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        
        axios.post('/saveMe', {
            title: this.state.title,
            publisher: this.state.publisher,
            summary: this.state.summary,
            publishedAt: this.state.date
        })
        .then( (response) =>{
         
           
        })
        .catch( (err) => {
            console.log(err)
        });
      
        event.preventDefault();
    }

    render(){
        return(
            <div>
                
                <div onClick={() => this.setState({showIm: !this.state.showIm})}> 
                    {this.state.showIm ? <img src={this.props.obj.media[0].url} height="150" width="250"/> : null  }
                    <h5>{this.props.obj.title}</h5>
                </div>

                <h6>{this.props.obj.hashtags[0]} {this.props.obj.hashtags[1]} {this.props.obj.hashtags[2]} </h6>
               
                 <div onClick={ () => this.setState({ showSum: !this.state.showSum})}>
                    <h5>-{this.props.obj.source.name} <h6>{moment(this.state.date).format('MMMM Do YYYY, h:mm:ss a')}</h6></h5>    
                    {this.state.showSum ? <h5>{this.props.obj.summary.sentences}</h5> : null}
                </div>
                <button onClick={this.handleClick}>Save</button>  

            </div>
        )
    }

}

export default RenderThis