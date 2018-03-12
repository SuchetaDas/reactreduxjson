import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import assets from './data.json';
//import axios from 'axios';
//import pic1 from '../public/images/pic1.jpg'

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
  }*/


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

export default App;
