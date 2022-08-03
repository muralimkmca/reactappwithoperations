import React,{Component} from "react";
import axios from 'axios'
import { variables } from "../Variables";

export class BookList extends Component{

    constructor(props){
        super(props);

        this.state={
            books:[],
            id:"",
            author:"",
            price:""

        }       
    }

    // refreshList(){
    //     fetch(variables.API_URL)
    //     .then(response=>response.json())
    //     .then(data=> {
    //         this.setState({books:data});
    //     });
    // }

    componentDidMount(){
        //this.refreshList();
        axios.get(variables.API_URL)
        .then(response=> {
            this.setState({books:response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const{
            books
        }=this.state;
        return(
                <div>                     
                    <table className="table-table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Author Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(b=>
                                <tr key={b.id}>
                                    <td>{b.id}</td>
                                    <td>{b.author}</td>
                                    <td>{b.price}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            )    
    }
}
