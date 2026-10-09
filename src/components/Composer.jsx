import { useState } from "react";

export default function Composer({onSend}) {
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function send() {
    const text = draft.trim();
    if(text === "") {
      return;
    }
    onSend(text);
    setDraft("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
    if (e.key === "Escape") {
      setDraft("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }
  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea  
        rows={2} 
        placeholder="Type a message..."
        value={draft}
        onChange={(e) => setDraft((e.target.value))} 
        onKeyDown={handleKeyDown}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />
      {isTyping && <span className="typing">You are typing...</span>}
      <button type="submit">Send</button>
    </form>
  );
}
