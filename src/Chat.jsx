import React,{useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from "@material-ui/core";

import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';

function Chat({messages}){
  const [input, setInput] = useState([]);

  const newMessage = async (e) =>{
    e.preventDefault();
    await axios.post('messages/new/',{
      message: input,
      name: "Demo",
      timestamp: "timestamp:10-08-2020",
      received: false
    });
    setInput("");
  }

  return(
    <div className="chat">
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
          <h3>Rocky</h3>
          <p>lastseen</p>
        </div>
        <div className="chat__headerRight">
           <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) =>(
          <p className={`chat__bodyMessage ${message.received && 'chat_bodyReceier'}`}>
            <span className="chat__bodyName">{message.name}</span>
            {message.message}
            <span className="chat__bodyTimestamp">
            {message.timestamp}
            </span>
          </p>
        ))

        }
        
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlinedIcon/>
        <form>
          <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Type a message"/>
          <button onClick={newMessage} type="submit">send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}
export default Chat;