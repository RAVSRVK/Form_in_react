import {Component} from 'react'
import './index.css';
import Axios from "axios";

class Form extends Component {
  state={name:"", states:"", issue:"", isNamefilled:false, istextareafilled:false , isStateFilled:false, List:[] }

  Submit =  event =>{
    event.preventDefault()
    const {name,states, issue} = this.state
      // insert into db
      if(name !=="" && states !=="" && issue!=="" ){
        let stats =  Axios.post('http://localhost:3307/create', {name:name, 
        states:states, 
        issue:issue,})
        .then(()=>{
          console.log("Success");
          alert("Form submitted successfully")
        })
        console.log(stats);
      }
      else{
          this.checkName()
          this.checkIssue()
          this.blurred()
        } 
    //   const obj = {
    //     name,
    //     states,
    //     issue
      // this.setState(ele =>({
      //   List:[...ele.List, obj], name:"", states:"", issue:""
      // }))
    // }

  }

  changeName = event =>{
    this.setState({name:event.target.value})
  }

  changeState = event =>{

    this.setState({states:event.target.value})
  }

  changeText = event =>{
    this.setState({issue:event.target.value})
  }

  checkName = () =>{
    const {name} = this.state
    if(name===""){
      this.setState({isNamefilled:true})
    }
    else{
      this.setState({isNamefilled:false})
    }
  }

  checkIssue = () =>{
    const {issue} = this.state
    if(issue===""){
      this.setState({istextareafilled:true})
    }
    else{
      this.setState({istextareafilled:false})
    }
  }

  blurred = () =>{
    const {states} = this.state
    if(states===""){
      this.setState({isStateFilled:true})
    }
    else{
      this.setState({isStateFilled:false})
    }
  }
 

  render() {
    const {name,states,issue,isNamefilled,istextareafilled, isStateFilled, List} = this.state
      
    return (
         <div className='container'>
        <form className={(isNamefilled || isStateFilled || istextareafilled) ? 'div-red form ' : 'form'}>
          
          <input className='input1' placeholder='Enter your name' value={name} onBlur={this.checkName} onChange={this.changeName} id="Name" type="text" />
          <p className='Warn_red' id='err1'>{isNamefilled ?  "*Please fill your name" : ""}</p>    
          
          <label htmlFor='state'>Select state</label><br />
          <div className='custom-select'>
          <select value={states} onClick={this.blurred} onChange={this.changeState} className='state' id="state">
              <option  className='hiddenValue'  selected hidden >Select a State</option>
              <option  value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Kerala">Kerala</option>
              <option value="Karnataka">Karnataka</option>
            </select><span className='custom-arrow'></span>
          </div>
          <p className='Warn_red'>{isStateFilled ? "*Please select a state" : ""}</p>
          <label htmlFor='Issue'>Tell us about the issue</label><br />
          <textarea placeholder="Enter your issue" onBlur={this.checkIssue} value={issue} onChange={this.changeText} className='textarea' id='Issue' rows="10" cols="50" ></textarea>
          <p className='Warn_red' id='err3'>{istextareafilled ?  "*Please explain about the issue" : ""}</p>          
          <button className='btn' onClick={this.Submit} type='submit'>Submit</button>
        </form>
        <div>
        </div>
      </div>
     
    );
  }
}

export default Form;