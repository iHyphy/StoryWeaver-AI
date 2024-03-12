import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "../../public/vite.svg";
import "../../src/App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'; 

const API_KEY = "";

function Monsters() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Now let's talk about monsters. What kind of monsters are you looking for?",
      sender: "ChatGPT",
      direction: "incoming",
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages, retryDelay = 1000) {
    
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";

      if(messageObject.sender === "ChatGPT") {
        
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const systemMessage = {
      role: "system",
      content: "Speak like you are a master D&D player that creates monsters for your friends."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }
    
   await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages(
          [...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]
        );
        setTyping(false);
      })
    }

  return (
    <div className="App">
      <div style={{ position: "relative", width: "700px", height: "800px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="ChatGPT is typing..." /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}
export default Monsters;