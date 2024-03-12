import { useState } from "react";
import { useQuery, gql } from "@apollo/client"; // Import useQuery and gql
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react'; 

const GET_OPENAI_API_KEY = gql`
  query GetOpenAIApiKey {
    getOpenAIApiKey
  }
`;

function Charactersheet() {
  const { loading, error, data } = useQuery(GET_OPENAI_API_KEY); // Use the useQuery hook to fetch the API key

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
    // Your existing logic for processing messages
  }

  if (loading) return <p>Loading...</p>; // Show loading message while fetching API key
  if (error) return <p>Error fetching API key: {error.message}</p>; // Show error message if fetching API key fails

  const API_KEY = data.getOpenAIApiKey; // Get the API key from the fetched data

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

export default App;





