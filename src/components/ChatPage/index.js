
import { useSelector } from "react-redux";
import Message from "../Message";

const ChatPage = () => {
    const chatHistory = useSelector((state) => state.chat.history);

    return (
        <div>
            {chatHistory.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    );
};

export default ChatPage;
