import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MessageInput({ onSend }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSend(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 px-4"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}