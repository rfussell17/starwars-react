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
            const character = res.data;
            this.setState({ character })
            console.log(res.data);  
        })
    };
    




  render() {

    return (
        <div>
            <h2>Characters</h2>
    
            <tr key={character.id}>
        <td id="1">{character.name}</td>
        <td id="2">{character.birthdate}</td>
        <td id="3">{character.height}</td>
        <td id="3">{character.mass}</td>
        <td>
        </td>
      </tr>

        
        </div>      
        );
    }
}

export default Characters;