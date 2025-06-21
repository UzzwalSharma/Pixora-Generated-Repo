import { Users, Clock } from 'lucide-react';

export default function ChatList({ activeChat, setActiveChat }) {
  const chats = [
    { id: 1, name: 'Team Chat', lastMessage: 'See you tomorrow!', unread: 2, time: '10:30 AM' },
    { id: 2, name: 'Design Group', lastMessage: 'New prototype ready', unread: 0, time: '9:45 AM' },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Users className="w-5 h-5" /> Chats
        </h2>
        <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">2 unread</span>
      </div>
      <div className="space-y-2">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className={`p-3 rounded-lg cursor-pointer ${activeChat === chat.id ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-500">{chat.lastMessage}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {chat.time}
                </span>
                {chat.unread > 0 && (
                  <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full ml-2">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}