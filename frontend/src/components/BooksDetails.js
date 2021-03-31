import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Booksdetails = (props) => {
    const [books, setBooks] = useState({});

    useEffect(() =>{
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/${slug}`);
                setBooks(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]); //This will update every time this parameters appears

    const createBooks = () => {
        return {__html: books.content}
    };

    //This is just for capitalizing the first letter of the genres
    const capitalize = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1); //Capitalizing the first letter and leaving the rest of the word alone
        return '';
    };
    
    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{books.title}</h1>
            <h2 className='text-muted mt-3'>Genre: {capitalize(books.genres)}</h2>
            <h4>{books.month} {books.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBooks()} />
            <hr />
            <p className='lead mb-5'><Link className='font-weight-bold text-dark' to='/books'>Back to all the books</Link></p>
        </div>
    );   
};

export default Booksdetails;