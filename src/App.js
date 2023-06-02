import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import chatReducer from "./store/chatSlice";
import Sidebar from "./components/Sidebar";
import ChatPage from "./components/ChatPage";

const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Sidebar />
      <ChatPage />
    </Provider>
  );
};

export default App;
