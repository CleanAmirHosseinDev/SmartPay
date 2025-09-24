import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import { setUser } from "./redux/auth/actions";
const savedUser = localStorage.getItem("authUser");
if (savedUser) {
  store.dispatch(setUser(JSON.parse(savedUser)));
}

export default function App() {
  return (
    <Provider store={store}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}
