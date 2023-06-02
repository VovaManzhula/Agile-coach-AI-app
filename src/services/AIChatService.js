import { io } from "socket.io-client";
import { store } from "../store/store";
import { addMessage } from "../store/chatSlice";

const socket = io("http://localhost:3000");

socket.on("ai_response", (message) => {
    store.dispatch(addMessage(message));
});

export const sendUserMessage = (message) => {
    socket.emit("user_message", message);
};
