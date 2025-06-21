import { useState } from 'react';
import { format } from 'date-fns';
import { ArrowRight, Clock } from 'lucide-react';
import MessageInput from './MessageInput';

export default function ChatWindow({ messages, setMessages }) {
  const handleSend = (newMessage) => {
    setMessages([...messages, {
      id: messages.length + 1,
      text: newMessage,
      sender: 'me',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-2xl ${
                message.sender === 'me'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-100 rounded-bl-none'
              }`}
            >
              <p>{message.text}</p>
              <div className="flex items-center gap-1 mt-1 opacity-80">
                <Clock className="w-3 h-3" />
                <span className="text-xs">
                  {format(message.timestamp, 'HH:mm')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}