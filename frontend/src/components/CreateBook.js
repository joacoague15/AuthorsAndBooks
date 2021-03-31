import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class CreateBook extends React.Component {
  state = {
    title: '',
    slug: '',
    genres: '',
    abstract: '',
    month: '',
    day: '',
    content: '',
    redirect: null,
  }

  //The target changes every time handleChange() is called
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    //Here we are "capturing" the data so the API can relate all the items It needs
    const book = {
      title: this.state.title,
      slug: this.state.slug,
      genres: this.state.genres,
      abstract: this.state.abstract,
      month: this.state.month,
      day: this.state.day,
      content: this.state.content,
    };

    axios.post('http://localhost:8000/api/books/create/createBook', this.state)
      .then(res => {
        console.log(res.data);
        this.setState({ redirect: '/books' });
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='d-flex justify-content-center'>
        <form onSubmit={this.handleSubmit}>
        <div className="alert alert-info" role="alert">
          Check that the written gender is valid.
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Title
            <input className='form-control' type="text" name="title" onChange={this.handleChange} />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Slug(No spaces)
            <input  className='form-control'type="text" name="slug" onChange={this.handleChange} />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Genre
            <input className='form-control' type="text" name="genres" onChange={this.handleChange} />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Abstract
            <input className='form-control' type="text" name="abstract" onChange={this.handleChange} />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Month
            <input className='form-control' type="text" name="month" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label className='form-label'>
            Day
            <input className='form-control' type="text" name="day" onChange={this.handleChange} />
          </label>
        </div>
        <div className='mb-3'>
          <label className='form-label'>
            Content
            <textarea className='form-control' type="textarea" name="content" onChange={this.handleChange}></textarea>
          </label>
        </div>
          <button className='btn btn-info' type="submit">Public</button>
        </form>
      </div>
    )
  }
}