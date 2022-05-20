import logo from './logo.svg';
import './App.css';

import { EntriesPreview } from './ui-components';



import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <AmplifyProvider>
      <h1>Journal Entries</h1>
    <div className="App">
        <p>
          <EntriesPreview />
        </p>
    </div>
    </AmplifyProvider>

  );
}

export default App;
