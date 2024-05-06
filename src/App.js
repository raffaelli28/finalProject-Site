import React, { useEffect, useState } from 'react'
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [messages, setMessages] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('a5692471b6593208ff43', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      setMessages([...messages, data])
    });


    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      { !user ? <Login /> : (
        <div className="app__body">
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
}
export default App;
