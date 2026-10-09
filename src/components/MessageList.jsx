import Message from "./Message.jsx";

export default function MessageList({ messages, pinnedId, onPin, onReact }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <Message 
          messages={messages[activeId]}
          pinnedId={pinnedId}
          onPin={handlePin} 
          onReact={handleReact}
        />
      ))}
    </ul>
  );
}
