import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cardClass from './card.css'
import 'tachyons';
class Demo extends Component
{
    render(){
        return (
        <div className="cardClass ma4 pa4"> 
        <img src={"https://joeschmoe.io/api/v1/"+this.props.name} alt="profile image"></img>
        <h2>{this.props.name}</h2>
        <h3>{this.props.work}</h3>
        </div>

        )
    }
}
export default Demo;