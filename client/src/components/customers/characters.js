import React, { Component } from 'react';
import axios from 'axios';

class Characters extends Component {
    constructor(){
        super();
        this.state = {
        characters: [
            {id: 1, firstName: "Luke", lastName: "skywalker"}
        ]
        }      

}

componentDidMount(){
        axios.get('https://swapi.dev/api/people/')
        .then((res) => {
            const person = res.data;
            this.setState({ person })
            console.log(res.data);  
        })
    };
    




  render() {


    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {this.state.characters.map(character => 
                   <li key={character.id}> {character.firstName} {character.lastName}</li> )}
            </ul>
        </div>      
        );
    }
}

export default Characters;