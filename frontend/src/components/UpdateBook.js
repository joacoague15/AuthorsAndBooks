import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = (props) => {
    const [updatedBook, setUpdatedBook] = useState({
        title: '',
        slug: '',
        genres: '',
        abstract: '',
        month: '',
        day: '',
        content: ''
    });

    //First we recover the book's data of the API
    useEffect(() =>{
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/${slug}`);
                setUpdatedBook(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, []);

    //The target changes every time handleChange() is called
    const handleChange = (event) => {
        setUpdatedBook({...updatedBook, [event.target.name]: event.target.value });
        console.log(event.target);
        console.log(updatedBook);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const slug = props.match.params.id;
        axios.put(`${process.env.REACT_APP_API_URL}/api/books/update/${slug}`, updatedBook)
            .then(res => {
            console.log(res.data);
        })
    }

    return (
    <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='form-label'>
                Title
                <input className='form-control' type="text" name="title" defaultValue={updatedBook.title} onChange={handleChange} />
                </label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                Slug
                <input  className='form-control'type="text" name="slug" defaultValue={updatedBook.slug} onChange={handleChange} />
                </label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                Genre
                <input className='form-control' type="text" name="genres" defaultValue={updatedBook.genres} onChange={handleChange} />
                </label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                Abstract
                <input className='form-control' type="text" name="abstract" defaultValue={updatedBook.abstract} onChange={handleChange} />
                </label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                Month
                <input className='form-control' type="text" name="month" defaultValue={updatedBook.month} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label className='form-label'>
                Day
            <input className='form-control' type="text" name="day" defaultValue={updatedBook.day} onChange={handleChange} />
                </label>
            </div>
            <div className='mb-3'>
                <label className='form-label'>
                Content
                <textarea style={{minHeight:'200px'}} className='form-control' type="textarea" name="content" defaultValue={updatedBook.content} onChange={handleChange} ></textarea>
                </label>
            </div>
                <button className='btn btn-info' type="submit">Update Book</button>
        </form>
    </div>
    );   
};

export default UpdateBook;