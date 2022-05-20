import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { EntryNavBar,SetEntry,EntriesPreview } from "./ui-components";
//import { Divider, withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";
import { EntriesPage } from "./models";
import { useState, useEffect } from "react";
import "./App.css";

class EditEntry extends Component {
    render(){
        return (<PutEntry />);
    }
}

  function PutEntry() {
    const { cid } = useParams();
    const [cr, setEntry] = useState(0);
    useEffect(()=>{
      const pullData = async() => {
        const entrys = await DataStore.query(EntriesPage, c => c.id("eq", cid));
        //const entrys = await DataStore.query(Entry, c => c.id("eq", cid));

        console.log(entrys);
        setEntry(entrys[0]);
        console.log(entrys[0].plate);
        // console.log("This s/b an array object:   ");
        // console.log(found);
        // setEntry(entrys[0]);
        // setEntry(found[0]);
        //     console.log("look! the name field:  " + found[0].name);
        // }
        // pullData()
        }
        pullData()
      }, []) 
      return (
        <div><p>{cid}</p>
          <EntryNavBar />
          <SetEntry ep={cr}/>
        </div>
      );
    }

export default EditEntry