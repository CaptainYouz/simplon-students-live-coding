import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book';

export default class Books extends Component {

    state = {
        books : []
    }

    componentDidMount(){
        axios.get('http://localhost:2345/books').then((res) => {
            this.setState({ books: res.data.content })
        }).catch((err)=> {
            console.error(err); 
        })
    }

    render() {
        console.log(this.state);
        
        return ( 
            <div> 
                <ul>
                    { this.state.books.map(book => < Book key= {book.id}title= {book.title} author= {book.author} imageUrl= {book.imageUrl}/>) }
                </ul>
            </div>
        )
    }
}

