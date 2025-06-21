import { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

export default function App() {
  const [activeChat, setActiveChat] = useState(1);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there! 👋', sender: 'them', timestamp: new Date() },
    { id: 2, text: 'Hi! How are you?', sender: 'me', timestamp: new Date() },
  ]);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/3 border-r bg-white">
        <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatWindow messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}