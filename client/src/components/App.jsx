import React from 'react';
import Axios from 'axios';
import Random from './Random.jsx';
import List from './Add.jsx';
import Add from './List.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'page': 'home',
      'studentlist' : []
    }
  this.getStudents = this.getStudents.bind(this);
  this.changepage = this.changepage.bind(this);
  }

  componentDidMount() {
    this.getStudents()
  }

  getStudents(){
    Axios.get('/api/students')
      .then((students) => {
        this.setState({
          studentlist: students.data
        }, () => {console.log(this.state)})
      })
      .catch((err) => {
        console.error(err)
      })
  }

  changepage(e){
    if (e.target.value === 'home') {
      this.getStudents();
    }
    this.setState({
      page: e.target.value
    }, () => {console.log(this.state.page)})
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <Add />
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <List students={this.state.studentList} getStudents={this.getStudents}/>
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <Random students={this.state.students}/>
          <button value='home' onClick={(e) => this.changepage(e)}>Back</button>
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onCLick={this.changepage}>Add Student</button>
          <button value='list' onCLick={this.changepage}>List Students</button>
          <button value='random' onCLick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}