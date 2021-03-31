import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom' 

const Books = () => {
    const [books, setBooks] = useState([]);
    const [featuredBook, setFeaturedBook] = useState([]);
    
    //For getting the login user
    useEffect(() => {
        console.log(sessionStorage.getItem('token'))
        const config = {
            headers: {
                Authorization: 'Token ' + sessionStorage.getItem('token')
            }
        }
        axios.get(`${process.env.REACT_APP_API_URL}/auth/user`, config).then(
            res => {
                console.log(res);
            },
            err => {
                console.log(err)
            }
        )
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/featured`); //REACT_APP_API_URL is configured in the .env file
                setFeaturedBook(res.data[0]); //[0] is because It is only one featured book
                console.log(res.data)    
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);

    //This is the async way of fetching data
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/books/`);
                setBooks(res.data); 
            }
            catch (err) {

            }
        }

        fetchBooks();
    }, []);

    //This is just for capitalizing the first letter of the genres
    const capitalize = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1); //Capitalizing the first letter and leaving the rest of the word alone
        return '';
    };

    //This function return all the books in no ordered way

    const getBooks = () => {
        let list = [];
        let result = [];

        books.map(BookPost => {
            return list.push (
                <div style={{backgroundColor:"#f6dbbc"}} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-secondary">{capitalize(BookPost.genres)}</strong>
                        <h3 className="mb-0">{BookPost.title}</h3>
                        <div className="mb-1 text-muted">{BookPost.month} {BookPost.day}</div>
                            <p className="card-text mb-auto">{BookPost.abstract}</p>
                            <Link to={`/books/${BookPost.slug}`} className="mt-2 text-dark">Continue reading...</Link>
                            <Link to={`/delete/${BookPost.slug}`} className="mt-2 text-dark">Delete book</Link>
                            <Link to={`/update/${BookPost.slug}`} className="mt-2 text-dark">Update book</Link>
                    </div>
                </div>

            );
        });

        //The +=2 is to display a 2/1 each row
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div className='col-md-6'>
                        {list[i]}
                    </div>
                    <div className='col-md-6'>
                        {/* Set to null in case there is no cart to render */}
                        {list[i+1] ? list[i+1] : null}
                    </div>
                </div> 
            )
        }

        return result;
    };

    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 link-secondary" to='/genres/autobiography'>Autobiography</Link>
                    <Link className="p-2 link-secondary" to='/genres/fiction'>Fiction</Link>
                    <Link className="p-2 link-secondary" to='/genres/comedy'>Comedy</Link>
                    <Link className="p-2 link-secondary" to='/genres/crime'>Crime</Link>
                    <Link className="p-2 link-secondary" to='/genres/drama'>Drama</Link>
                    <Link className="p-2 link-secondary" to='/genres/horror'>Horror</Link>
                    <Link className="p-2 link-secondary" to='/genres/philosophy'>Philosophy</Link>
                    <Link className="p-2 link-secondary" to='/genres/history'>History</Link>
                </nav>
            </div>

            <div style={{backgroundColor:"#b78763"}} className="jumbotron p-4 p-md-5 text-white rounded">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBook.title}</h1>
                    <p className="lead my-3">{featuredBook.abstract}</p>
                    <p className="lead mb-0">
                        <Link to={`/books/${featuredBook.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
            </div>

            {/* Rendering all the books */}
            {getBooks()}
        </div>

        
    );

};

export default Books;