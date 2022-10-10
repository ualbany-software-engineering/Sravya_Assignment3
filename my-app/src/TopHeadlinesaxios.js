//Top_Headlines_axios.js


import React,{ Component, Suspense } from 'react';
import './Top_Headlines_axios.css';
import logo from './logo.svg';
import axios from 'axios';

class TopHeadlinesaxios extends Component{
    constructor(props){
        super()
        this.state=({
            objs: [],
           myerror: [],
           indexes:[]
        })}

    
        
    componentDidMount(props){
        axios.get(`https://newsapi.org/v2/top-headlines?country=&category=${this.props.Category}&pageSize=${100}&apiKey=00902fe8f9a04fceac8ac41e1ed58946`,{timeout:20000})
          .then(res => {
           this.setState({
                objs:res.data,
            });
            var num=[];
           for(var i=0;i<this.state.objs.totalResults && i<100;i++){
                num.push(this.state.objs.articles[i]);
                }
               this.setState({
                    indexes:num
               })
          }).catch(err=>{this.setState({myerror:"Timeouterror"})})  }
     componentDidUpdate(prevProps){
        if(prevProps.Country!==this.props.Country){
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&pageSize=${100}&apiKey=00902fe8f9a04fceac8ac41e1ed58946`)
          .then(res => {
           this.setState({
                objs:res.data,
                
            });
           var num=[];
           for(var i=0;i<this.state.objs.totalResults;i++){
                num.push(this.state.objs.articles[i]);
                }
               this.setState({
                    indexes:num
               })
          //  console.log(this.state.objs);
            //console.log(num);
            console.log(this.state.indexes)
          })
        }}
       
        render (){
            return( 
                <div >
                    {(this.state.myerror!=="Timeouterror")?
                    <div>
                <h3 className="text-left" >{this.props.name}</h3>
                <div  className="p-3 mb-2 bg-secondary text-dark">
                {this.state.objs.totalResults!==0?
                        <div className="item" >
                            
                    {this.state.indexes.map((list)=>(list.urlToImage!=null?
                    <div className="well">
                    <form className="row" onClick={()=>window.open(list.url,"_blank")}>
                        <div className="col-sm-4">
                            <img src={list.urlToImage} width={270} height={270}  alt="image not available" className="icon-Details"/>
                        </div>
                        
                        <div className="col-sm-4" >
                                <h4>Source:</h4><p>{list.source.name}</p>
                                    <h4>Author:</h4><p>{list.author}</p>
                                    <h4>Title:</h4><p>{list.title}</p>
                               <h4>Description:</h4><p>{list.description}</p>
                            </div>
                    </form>
                    </div>
                    :
                    <div className="well">
                    <form className="row" onClick={()=>window.open(list.url,"_blank")}>
                        <div className="col-sm-4">
                            <img src={logo} width={270} height={270} className="icon-Details"/>
                        </div>
                        
                        <div className="col-sm-4" >
                                <h4>Source:</h4><p>{list.source.name}</p>
                                    <h4>Author:</h4><p>{list.author}</p>
                                    <h4>Title:</h4><p>{list.title}</p>
                               <h4>Description:</h4><p>{list.description}</p>
                            </div>   
                    </form></div>))}
                </div>
                        :<p className="text-center">Sorry no result</p>}

                </div>
                 </div>:<h1 className="text-center"> Sorry unable to process your request. Please Reload the page/Try again Later</h1>}
                 </div>

        )
                }
}
export default TopHeadlinesaxios
