import React from 'react';
const moment = require('moment');
console.log(moment())


class RenderThis extends React.Component {
    constructor(props){
        super(props);

        this.state = {

            showIm : false,
            showSum: false
        }

    }

    render(){
        return(
            <div>
                <div onClick={() => this.setState({showIm: !this.state.showIm})}> 
                    {this.state.showIm ? <img src={this.props.obj.media[0].url} height="150" width="250"/> : null  }
                    <h5>{this.props.obj.title}</h5>
                </div>
                {/* {moment({this.props.obj.publishedAt}).format('MMM. d, YYYY')} */}
                 <div onClick={ () => this.setState({ showSum: !this.state.showSum})}>
                    <p>-{this.props.obj.source.name}</p>    
                    {this.state.showSum ? <p>{this.props.obj.summary.sentences}</p> : null}
                </div>
               
            </div>
        )
    }

}

export default RenderThis