import React from 'react';
import axios from 'axios';
import Axios from 'axios';

// const ListElement = (props) =>
//   <span>
//     <div>{props.student.name}</div>
//     <img src={props.student.imgurl}></img>
//   </span>

export default ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateName: false,
      studentId: 0,
      studentName: this.props.student.name
    }
    this.updateStudent = this.updateStudent.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  updateStudent() {
    Axios.put(`/api/students/${id}`, {
      name: this.state.studentName
    })
    .then(() => {
      this.props.getStudent()
    })
    .catch((err) => {
      console.error(err);
    })
  }

  clickHandler(id) {
    this.setState({
      updateName: true,
      studentId: id
    })
  }

  changeHandler() {
    this.setState({
      studentName: e.target.value
    })
  }

  submitHandler() {
    e.preventDefault();
    this.setState({
      updateName: false
    }, () => {
      this.updateStudent(this.state.students)
    })
  }

  render() {
    return(
      this.state.updateName ?
      <span>
        <input onChange={this.changeHandler} value={this.state.studentName}></input>
        <button onClick={this.submitHandler}>Change Name</button>
          <div>src={this.props.student.imgurl}</div>
      </span> :
      <span>
        <div onClick={() => this.clickHandler}>{this.props.student.name}</div>
        <img src={this.props.student.imgurl}></img>
      </span>
  }
}