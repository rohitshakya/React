import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cardClass from './card.css'
import 'tachyons';
class Card extends Component
{
    render(){
        return (
        <div className="cardClass ma4 pa4 grow .shadow-1 { box-shadow: 0px 0px 4px 2px rgba( 0, 0, 0, 0.2 ); }"> 
        <img src={"https://joeschmoe.io/api/v1/"+this.props.name} alt="profile image"></img>
        <h2>{this.props.name}</h2>
        <h3>{this.props.work}</h3>
        </div>

        )
    }
}
export default Card;