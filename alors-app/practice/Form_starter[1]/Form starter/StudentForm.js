import React, { Component } from "react";

import validator, { field } from './validator';

//Class Component example
export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: field({name: 'name', value: '', isRequired: true, minLength: 2}),
      email: field({name: 'email', value: '', isRequired: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}),
      age: field({name: 'age', value: 18, isRequired: true}),
      course: field({name: 'course', value: '', isRequired: true}),
      image: field({name: 'image', value: '', pattern: /^(http|https)/})
    };
  }

  onChange = ({target: { name: fieldName, value }}) => { 
    const errors = validator(fieldName, value, this.state[fieldName].validations);
    
    this.setState({
        [fieldName]: {
            ...this.state[fieldName],
            value,
            errors
        }
      });
  }

  submit = e => {
    e.preventDefault();

    const student = Object.assign({}, this.state); // or { ...this.state }

    for(let key in student){
        const { value, validations } = student[key];
        const errors = validator(value, key, validations);
        if(errors.length){
            student[key].errors = errors;
        }
    }

    this.setState({...student});
    //Send data to somewhere 
    //...
    //ToDo - make an object that can be sent remotely: 
    // {
    //   name: 'Shahar', 
    //   email: 'lala@wawa.com', 
    //   ...
    // }
    
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="form-group">
          <label htmlFor="sname">Name</label>
          <input
            type="text"
            className="form-control"
            id="sname"
            name="name"
            placeholder="Student Name"
            defaultValue={this.state.name.value}
            onBlur={this.onChange}
          ></input>
          {this.state.name.errors.map((error,index) => (
            <small key={index} className="form-text text-danger">{error}</small>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="semail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="semail"
            name="semail"
            placeholder="name@example.com"
            defaultValue={this.state.email}
            onBlur={this.onEmailChange}
          ></input>
          {this.state.errors.email.map(error => (
            <small className="form-text text-danger">{error}</small>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="sage">Age</label>
          <input
            type="range"
            className="custom-range"
            min="18"
            max="100"
            id="sage"
            name="sage"
            defaultValue={this.state.age}
            onInput={this.onAgeChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="scourse">Course</label>
          <select
            className="form-control"
            id="scourse"
            name="scourse"
            defaultValue={this.state.course}
            onBlur={this.onCourseChange}
          >
            <option value="">Select Course</option>
            <option value="node">Node</option>
            <option value="js">JavaScript</option>
            <option value="sql">SQL</option>
            <option value="react">React</option>
          </select>
          {this.state.errors.course.map(error => (
            <small className="form-text text-danger">{error}</small>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="simage">Image</label>
          <input
            type="text"
            className="form-control"
            id="simage"
            name="simage"
            placeholder="Student Image Url"
            defaultValue={this.state.image}
            onBlur={this.onImageChange}
          ></input>
          {this.state.errors.image.map(error => (
            <small className="form-text text-danger">{error}</small>
          ))}
        </div>        
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    );
  }
}
