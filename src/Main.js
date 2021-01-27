import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import cardClass from './card.css';
import Card from './Card';
import 'tachyons';
class Main extends Component

{

	render(){


		const cardArray = [
		{		
			id:0,
			name:"Rohit Shakya",
			work:"Doctor"
		},

		{		
			id:1,
			name:"Ishant Sharma",
			work:"Web Developer"
		},
		{		
			id:2,
			name:"Mayank Kaushik",
			work:"Backend Developer"
		},
		{		
			id:3,
			name:"Geetika Tayal",
			work:"Marketing Head"
		},
		{		
			id:4,
			name:"Arjun Singh",
			work:"Teaching Assistant"
		},

		{		
			id:5,
			name:"Deepak Yadav",
			work:"Director"
		}
		]
		const list=cardArray.map((card,i)=>{
			return <Card name={cardArray[i].name} work={cardArray[i].work}/> 
		}
		)
		return (
			<div>
			<h1 class=" ma4 pa4 tc grow">Welcome in Avatar world</h1>
			{list}
			</div>
		)
	}
}
export default Main;