import React, { Component } from 'react'
import axios from "axios";
import { variables } from '../Variables';

export class AddBook extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
           name:'',
           author:'',
           price:'',
           category:''
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
  
        axios({
            method:'post',
            url:variables.API_URL,
            data:{
                name:this.state.name,
                author:this.state.author,
                price:this.state.price,
                category:this.state.category
            }
        }).then(response => {
                  console.log(response)                  
              })        
      }

    render() {
        const{name,author,price,category} = this.state
        return (        
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
                    <br/>
                    <label>Author</label>
                    <input type='text' name='author' value={this.state.author} onChange={this.handleChange}></input>
                    <br/>
                    <label>Price</label>
                    <input type='text' name='price' value={this.state.price} onChange={this.handleChange}></input>
                    <br/>
                    <label>Category</label>
                    <input type='text' name='category' value={this.state.category} onChange={this.handleChange}></input>
                    <br/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
          </div>
        )
    }
}

export default AddBook