import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const darkMode = savedMode ? JSON.parse(savedMode) : true;
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <main className="dark:bg-black bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="welcome" element={<WelcomePage />} />
            <Route path="home" element={<Home />} />
          </Route>

          <Route path="auth" element={<LoginLayout />}>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="policies" element={<PolicyLayout />}>
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="api-reference" element={<APIReference />} />
            <Route path="blog" element={<Blog />} />
            <Route path="community" element={<Community />} />
          </Route>

          <Route path="upgrade" element={<PricingSection />} />
          <Route path="subscription/success" element={<PaymentSuccess />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
