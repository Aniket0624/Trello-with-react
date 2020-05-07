import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardComponent extends Component {
    constructor() {
        super();
        this.state = { data: [] };
      }
      componentDidMount() {
        const url = `https://api.trello.com/1/members/me/boards?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
        fetch(url, {
          method: 'Get'
        })
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
      }
    
    
    render() {
      if (this.state.data.length === 0) {
        return <h1>Loading...</h1>;
      }
      return (
        <div className = "Boards">
            {this.state.data.map(el => (
              <h1 key = {el.id}>
              <Link to = {`/board/${el.id}`}> {el.name} </Link>
              </h1>
            ))}
        </div>
      );
    }
}
 
export default BoardComponent;