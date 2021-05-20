import React, {Component} from 'react';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';


class Avatar extends Component{

	constructor(){
		super();
		this.state = {
			name: "Welcome to avatar world"
		}
	}

	namechange(){
		this.setState({
			name: "Subscribe to our channel"
		})
	}

	render(){
		const avatarlistarray = [
			{
				id:1,
				name:"Yashmita",
				work:"Web Developer"
			},
			{
				id:2,
				name:"Aryan",
				work:"Student"
			},
			{
				id:3,
				name:"Tanishka",
				work:"Doctor"
			},
			{
				id:4,
				name:"Harshita",
				work:"Student"
			},
		]

		const arrayavatarcard = avatarlistarray.map( (avatarcard, i) =>{
			return <Avatarlist key = {i} id = {avatarlistarray[i].id} 
						name = {avatarlistarray[i].name} 
						work = {avatarlistarray[i].work}/>

		})

		return (
		<div className = "mainpage">
		<h1>{this.state.name}</h1>
		{arrayavatarcard}
		<button onClick = { () => this.namechange() }> Subscribe </button>
		</div>
	)
	}
}

export default Avatar;