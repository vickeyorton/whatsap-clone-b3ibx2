import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from "@material-ui/core";

import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';

function Chat(){
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
        <p className="chat__bodyMessage">
          <span className="chat__bodyName">Rocky</span>
          This is message
          <span className="chat__bodyTimestamp">
          {new Date().toUTCString()}
          </span>
        </p>
        
        <p className="chat__bodyMessage chat_bodyReceier">
          <span className="chat__bodyName">Rocky</span>
          This is Reply message
          <span className="chat__bodyTimestamp">
          {new Date().toUTCString()}
          </span>
        </p>
        
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlinedIcon/>
        <form>
          <input type="text" placeholder="Type a message"/>
          <button type="submit">send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}
export default Chat;