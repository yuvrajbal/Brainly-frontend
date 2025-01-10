import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
import PolicyLayout from "./PolicyLayout";
import LoginLayout from "./pages/LoginLayout";
import Profile from "./pages/Profile";
import PaymentSuccess from "./pages/SubscriptionSuccess";
function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="subscription/success" element={<PaymentSuccess />} />
            <Route path="upgrade" element={<PricingSection />} />
            <Route path="subscription/fail" element={<SubscriptionFail />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/policies" element={<PolicyLayout />}>
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="cookie-policy" element={<CookiePolicy />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="api-reference" element={<APIReference />} />
              <Route path="blog" element={<Blog />} />
              <Route path="community" element={<Community />} />
            </Route>
          </Route>

          <Route path="welcome" element={<WelcomePage />} />

          <Route path="auth" element={<LoginLayout />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
