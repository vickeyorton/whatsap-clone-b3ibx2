import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export default function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Chat/>
    </div>
  );
}
