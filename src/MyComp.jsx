
import React, { Component } from 'react';
import withTitle from './container';

class MyComp extends Component {
      
      render() {
          return(<div>
                  <h1>THIS IS SUNDAY</h1>
               </div>)
      }
   }

export default withTitle(MyComp);