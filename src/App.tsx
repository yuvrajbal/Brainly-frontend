import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import SubscriptionFail from "./pages/SubscriptionFail";
import PricingSection from "./pages/PricingSection";
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
            <Route path="subscription/fail" element={<SubscriptionFail />} />
            <Route path="upgrade" element={<PricingSection />} />
          </Route>
          {/* <Route path="subscribe" element={<SubscriptionWrapper />} /> */}

          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
