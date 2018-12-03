
import React, { Component } from 'react';

const withTitle = (_component) => {
   class HOC extends Component {
      
      render() {
          return(<div>
                  <h1>welcome HOC</h1>
                   <_component/>
               </div>)
      }
   }

   return HOC;
}
export default withTitle;