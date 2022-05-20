// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

import {EntryNavBar, EntriesPreview} from "./ui-components";
import { Routes, Route } from 'react-router-dom'
import CreateEntry from './CreateEntry'
import EditEntry from './EditEntry';

function App({ signOut }) { 
  return (
    <div className="App">
      <header className="App-header">

      <Routes>
            <Route exact path='/' element={<div><EntryNavBar /><EntriesPreview/></div>} />
            <Route exact path='/newnewentry' element={<div><CreateEntry/></div>} />
            <Route exact path='/entry/:cid' element={<div><EditEntry/></div>} />
          </Routes>
        <button onClick={signOut}>Logout?</button>

       
      </header>
      
    </div>
  );
}

export default withAuthenticator(App);