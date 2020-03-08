import React from 'react';
import Axios from 'axios';


export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'imgurl': ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e){
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.post('/api/students', this.state)
    .then(() => {console.log('success')})
    .catch((err) => {console.error(err)})
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input type="text" name="name" onChange={this.changeHandler}/>
          <label>Image URL: </label>
          <input type="text" name="imgurl" value={this.state.name} onChange={this.changeHandler}/>
          <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}