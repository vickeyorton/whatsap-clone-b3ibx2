import React,{useEffect, useState} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from 'pusher-js';
import axios from './axios';

export default function App() {
  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  },[]);

  useEffect(() => {
    const pusher = new Pusher('1f3c553b0798c9f4efe5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newmessage) => {
      setMessages([...messages,newmessage]);
    });

    return () =>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

  console.log(messages);

  return (
    <div className="app">
      <Sidebar/>
      <Chat messages= {messages}/>
    </div>
  );
}
