import React from 'react';

class RenderThis extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value : this.props
        }

    }

    render(){
        return(
            <div><pre><code>{JSON.stringify(this.props.datas)}</code></pre>
            </div>
        )
    }

}

export default RenderThis