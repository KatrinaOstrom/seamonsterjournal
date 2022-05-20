import React, { Component } from 'react'
import './App.css';
import { useState } from "react";
import {EntriesPreview,SetEntry,EntryNavBar} from "./ui-components";

function App() {
  const navbarOverrides = {"image": { height:"34px", src: "https://img.icons8.com/color/50/000000/car--v1.png", },};
  const [updateEntry, thisEntry] = useState()
  return (
    <div className="App">
      <EntryNavBar overrides={navbarOverrides} />
      <SetEntry entry={updateEntry}/><EntriesPreview overrideItems={({ item }) => ({ onClick: () => thisEntry(item)})} />
    </div>
  );
}

export default App;