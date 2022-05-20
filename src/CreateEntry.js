import React, { Component } from 'react'
import { NewNewEntry, EntryNavBar } from "./ui-components";
import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

class CreateEntry extends Component {
    render(){
        return (<PutEntry />);
    }
}

  function PutEntry() {
      return (
        <div>
            <EntryNavBar />
            <NewNewEntry style={{ textAlign: "left"}} />
        </div>
      );
    }

export default CreateEntry