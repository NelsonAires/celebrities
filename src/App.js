
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        celebrities:[]
      };
      // const {celebrities} = this.celebrities;
    }
    // const {celebrities} = this.props;
      componentDidMount() {
        axios.get('https://api.themoviedb.org/3/person/popular?page=5&api_key=d7d00236f3a0891b3c07fd98f6f189cd')
          .then((res) => { 
            console.log(res.data.results)      
            this.setState({celebrities:res.data.results});
          })
        }

  render() {
    return (
    //   <div className={this.state.celebrities}>
    //   This will be hidden if you set <tt>props.shouldHide</tt> 
    //   to something truthy.
    // </div>
    <div className="celebs">
      <h1>Celebs</h1>
      {this.state.celebrities.map(celebrities => 
      <ul key={celebrities.id}> 
        <img src={"https://image.tmdb.org/t/p/w185"+celebrities.profile_path} class="profPicture" alt="profile"/>
      {celebrities.name}</ul>)}
    </div>
    )
  }
}


