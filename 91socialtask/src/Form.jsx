import React from 'react';


class Form extends React.Component{
    render(){
        return(
            <div>
                {this.props.leftlabel}<input type="text"/>   
            </div>
        )
    }
}

export default Form 