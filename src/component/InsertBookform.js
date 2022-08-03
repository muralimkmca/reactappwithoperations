import React, { Component } from 'react'
import axios from "axios";

export class InsertBookform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })       
    }

    handleSubmit=(e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
            
        })
    }

  render() {
    const{userId,title,body} = this.state
    return (    
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Id</label>
                <input type='text' name='userId' value={this.state.userId} onChange={this.handleChange}></input>

                <label>Title</label>
                <input type='text' name='title' value={this.state.title} onChange={this.handleChange}></input>

                <label>Body</label>
                <input type='text' name='body' value={this.state.body} onChange={this.handleChange}></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default InsertBookform