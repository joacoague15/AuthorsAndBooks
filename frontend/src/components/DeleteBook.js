import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeleteBook = (props) => {
    const [books, setBooks] = useState({});

    useEffect(() =>{
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.delete(`${process.env.REACT_APP_API_URL}/api/books/destroy/${slug}`);
                setBooks(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]); //This will update every time this parameters appears

    return (
        <div className='container mt-3'>
            <div className="alert alert-success text-center" role="alert">
                The book has been deleted!<hr></hr>
                <Link className='btn btn-info' to='/books'>Go check other books</Link>
            </div>
        </div>
    );   
};

export default DeleteBook;