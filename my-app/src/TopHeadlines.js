//Top_Headlines.js


import 'bootstrap/dist/css/bootstrap.min.css';

import React,{Component} from 'react';
import TopHeadlinesaxios from './TopHeadlinesaxios';

class TopHeadlines extends Component{
        
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
      }
   
        
          handleChange(event) {
            this.setState({value: event.target.value});
          }

    render(){
        return(
        <div className="p-3 mb-2 bg-secondary text-white">
            <nobr> 
            <h3 className="text-center">Top-Headlines</h3>
            <div className="p-3 mb-2 bg-secondary text-dark">  
                <form className="text-right" >
                    <label >
             <select value={this.state.value}  onChange={this.handleChange}>
                 <option value=''>Select a Country</option>
                 <option value="ae">United Arab Emirates</option>
                 <option value="ar">Argentina</option>
                 <option value="at">Austria</option>
                 <option value="au">Australia</option>
                 <option value="be">Belgium</option>
                 <option value="bg">Bulgaria</option>
                 <option value="br">Brazil</option>
                 <option value="ca">Canada</option>
                 <option value="ch">Switzerland</option>
                 <option value="cn">China</option>
                 <option value="co">Colombia</option>
                 <option value="cu">Cuba</option>
                 <option value="cz">Czechia</option>
                 <option value="de">Germany</option>
                 <option value="eg">Egypt</option>
                 <option value="fr">France</option>
                 <option value="gb">Great Britain</option>
                 <option value="gr">Greece</option>
                 <option value="hk">Hong kong</option>
                 <option value="hu">Hungary</option>
                 <option value="id">Indonesia</option>
                 <option value="ie">Ireland</option>
                 <option value="il">Israel</option>
                 <option value="in">India</option>
                 <option value="it">Italy</option>
                 <option value="jp">Japan</option>
                 <option value="kr">Korea</option>
                 <option value="lt">Lithuania</option>
                 <option value="lv">Latvia</option>
                 <option value="ma">Morocco</option>
                 <option value="mx">Mexico</option>
                 <option value="my">Malaysia</option>
                 <option value="ng">Nigeria</option>
                 <option value="nl">Nicaragua</option>
                 <option value="no">Norway</option>
                 <option value="nz">New Zealand</option>
                 <option value="ph">Phillippines</option>
                 <option value="pl">Poland</option>
                 <option value="pt">Portugal</option>
                 <option value="ro">Romania</option>
                 <option value="rs">Serbia</option>
                 <option value="ru">Russia</option>
                 <option value="sa">Saudi Arabia</option>
                 <option value="se">Sweden</option>
                 <option value="sg">Singapore</option>
                 <option value="si">Slovenia</option>
                 <option value="sk">Slovakia</option>
                 <option value="th">Thailand</option>
                 <option value="tr">Turkey</option>
                 <option value="tw">Taiwan</option>
                 <option value="ua">Ukraine</option>
                 <option value="us">United States of America</option>
                 <option value="ve">Venezuela</option>
                 <option value="za">South Africa</option>
             </select>
             </label>
                </form>
            </div>
            <div>
         <TopHeadlinesaxios name='Business' Category='business' Country={this.state.value}/>
         <TopHeadlinesaxios name="Entertainment" Category="entertainment" Country={this.state.value}/>
         <TopHeadlinesaxios name="General" Category="general" Country={this.state.value}/>
         <TopHeadlinesaxios name="Health" Category="health" Country={this.state.value}/>
         <TopHeadlinesaxios name="Science" Category="science" Country={this.state.value}/>
         <TopHeadlinesaxios name="Sports" Category="sports" Country={this.state.value}/>
         <TopHeadlinesaxios name="Technology" Category="technology" Country={this.state.value}/>
     </div>
        </nobr> </div>
    )
    }
}
export default TopHeadlines