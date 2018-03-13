/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import assets from './data.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        items : []
    };
  }

  /*componentWillMount(){
    axios.get('./data.json')
    .then(function(result){
       this.setState({
         items: result.data
       });
    })
  }


  render() {
    return (
      <table>
        <thead>
           <th>Image</th>
           <th>ImageTitle</th>
           <th>Desc</th>
        </thead>
        <tbody>
          {assets.map(function(item){
            return(
              <tr key = {item._id}>
                 <td><img src={process.env.PUBLIC_URL + '/images/pic1.jpg'} width='100' height='100' alt='test'/></td>
                 <td>{item.imageTitle}</td>
                 <td>{item.imageDesc}</td>
              </tr>  
            );
          })}
        </tbody>
      </table>  

    );
  }
}

export default App;*/

import React, { Component } from 'react';
import axios from 'axios';
import SearchComponent from '../components/searchComponent';
import ListComponent from '../components/listComponent';
axios.defaults.baseURL = 'http://localhost:8080';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        items: null
    };
  }

 componentWillMount(){ debugger;
   var th = this;
   axios.get("/items")
    .then(function(result){ debugger;
      // th.state.items = result.data.items;
    /*th.setState({
           items: result.data.items
       });*/
       console.log(result.data.items);
     })
 }

  
  componentUnmount(){
    this.serverRequest.abort();
  }

  render(){

    const { items } = this.state;
    console.log(this.state.items);
    return(
      <div className = "container">
         <div className ="flexContainer margin-bottom">
                <SearchComponent/>
          </div> 
          <div className = "flex-container">
              <ListComponent items = {items} />
          </div>  
      </div>  
    );

  }
}

export default App;
