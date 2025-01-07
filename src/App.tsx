import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SubscriptionSuccess from "./pages/SubscriptionSuccess";
import SubscriptionFail from "./pages/SubscriptionFail";
import PricingSection from "./pages/PricingSection";
import WelcomePage from "./pages/Welcome";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService";
import CookiePolicy from "./pages/CookiePolicy";
import {
  APIReference,
  Blog,
  Community,
  Documentation,
} from "./pages/ComingSoon";
function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route
              path="subscription/success"
              element={<SubscriptionSuccess />}
            />
            <Route path="subscription/fail" element={<SubscriptionFail />} />
          </Route>
          <Route path="upgrade" element={<PricingSection />} />
          <Route path="welcome" element={<WelcomePage />} />
          {/* <Route path="subscribe" element={<SubscriptionWrapper />} /> */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/api-reference" element={<APIReference />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
