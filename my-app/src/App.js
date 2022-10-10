//App.js


import React,{Component, Suspense}from 'react';
import './App.css';
import TopHeadlines from './TopHeadlines'
import Everything from './Everything'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:"",
      qu:"",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick  = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  todate(){
    var tempDate=new Date();
  var date=tempDate.getDate()+'-'+(tempDate.getMonth()+1)+'-'+tempDate.getFullYear();
   return date;
   
    }

  handleSubmit(event) {
    this.setState({qu:this.state.value});
  }
  handleClick(event){
    this.setState({
      qu:event.target.value,
    })
  }
 
render(){
    return (
    <div className="p-3 mb-2 bg-secondary text-dark" id="myPage">
    
      <div className="p-3 mb-2 bg-danger text-white">  
       <div>
            <h1 className="text-center">Fast-Track News {this.todate()}</h1>
            <p className="text-center">Welcome, Explore The World News Through Fast-Track News</p>
        </div>
        
      <form    className="text-center" >
        <label >
      <input type="text" className="form-control mx-sm-3"value={this.state.value}  onChange ={this.handleChange} placeholder="Enter a KeyWord or Phrase"></input>
      <p></p>
      <input type="button" value="Explore" onClick={this.handleSubmit} className="btn btn-primary" ></input>
      </label>

      </form>
      </div>
      
      <Suspense fallback={<h1>Loading News....</h1>}>
      {(this.state.qu === "")?<TopHeadlines/>:
      <Everything Query={this.state.qu}/>}</Suspense>
    
      <br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <footer class="container-fluid text-center">
  <a href="#myPage" title="To Top">
    <span class="glyphicon glyphicon-chevron-up"></span>
  </a>
  <p>Back to Top </p> 
</footer>
      </div>
  )
}
}


export default App;
