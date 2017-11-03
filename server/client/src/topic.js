import React from 'react';
import RenderThis from './render.js';
const axios = require('axios');



class Topic extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        data: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
   

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      axios.post('/headlines',  {
        value: this.state.value
      } )
      .then( (response) => {

        console.log('front end',response.data);
        console.log(this)
        this.setState({data: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({value:''})
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Topic:
          <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange}
             placeholder="SpaceX, Tesla etc.. "/>
          </label>
          <input type="submit" value="Submit" />
        </form>
       <RenderThis datas={this.state.data}/>
        </div>
      );
    }
  }

  export default Topic