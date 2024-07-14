import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            count:0,
        };
    }
    render(){
        return (
          <div>
            <h1>By Class Component</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                })
            }}>Count = {this.state.count}</button>
            <h2>Name: {this.props.name}</h2>
          </div>
        );
    }
}
export default UserClass;