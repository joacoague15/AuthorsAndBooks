import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './app.css'

const Genres = (props) => {
    const [books, setBooks] = useState([]);
    const [currentGenre, setCurrentGenre] = useState('');

    useEffect(() => {
        const genre = props.match.params.id;
        setCurrentGenre(capitalize(genre));

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        //This is a POST request
        const fetchData = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/books/genres`, { genre }, config);
                setBooks(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    //This is just for capitalizing the first letter of the genres
    const capitalize = (word) => {
        if (word)
            return word.charAt(0).toUpperCase() + word.slice(1); //Capitalizing the first letter and leaving the rest of the word alone
        return '';
    };

    const getGenresBooks = () => {
        let list = [];
        let result = [];

        books.map(BookPost => {
            return list.push(
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-secondary">{capitalize(BookPost.genres)}</strong>
                        <h3 className="mb-0 text-dark">{BookPost.title}</h3>
                        <div className="mb-1 text-muted">{BookPost.month} {BookPost.day}</div>
                            <p className="card-text mb-auto">{BookPost.abstract}</p>
                            <Link className='text-dark' to={`/books/${BookPost.slug}`}>Continue reading...</Link>
                    </div>
                </div>
            );
        });

        //The +=2 is to display a 2/1 each row
        for (let i = 0; i < list.length; i += 2) {
            result.push(
                <div key={i} className="row mb-2">
                    <div  className='col-md-6'>
                        { list[i]}
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
        <div className='container mt-3'>
            <h3 className='display-4'>{ currentGenre } Genre</h3>
            <div className='nav-scroller py-1 mb-2'>
                <nav className='nav d-flex justify-content-between'>
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
            {getGenresBooks()}
        </div>
    );
};

export default Genres;