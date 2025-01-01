import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import SubscriptionWrapper from "./components/SubscriptionForm";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Landing />} />
            <Route path="home" element={<Home />} />
            <Route
              path="subscription/success"
              element={<SubscriptionSuccess />}
            />
          </Route>
          <Route path="subscribe" element={<SubscriptionWrapper />} />

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
