import React, { useState, useEffect } from "react";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Button from "./Button";

const stripePromise = loadStripe(
  "pk_test_51PcyV62KBMentevw6jpHzkayyI9e3dFfeV4fFOYyL9Omn1r4WJOJig3Z3EmVpm4xxIi0Xj9vy1JScpio5l3LxEBF00HhI83Eic"
);
const paymentElementOptions = {
  layout: {
    type: "tabs",
    defaultCollapsed: false,
  },
  fields: {
    billingDetails: {
      email: "required",
    },
  },
};

function SubscriptionForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(""); // Store the email input

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setError("");

    try {
      // Make sure email is provided
      if (!email) {
        setError("Email is required.");
        return;
      }

      // Get payment details from Stripe
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || "Payment details validation failed.");
        return;
      }

      // Call backend to create subscription and get clientSecret
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-subscription`,
        {
          email,
          priceId: "price_1QcVtf2KBMentevwP3izOLWY", // Adjust to your price ID
        },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const { clientSecret } = response.data;

      // Confirm the payment using Stripe's API
      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/subscription/success`,
        },
      });

      if (stripeError) {
        setError(stripeError.message || "An error occurred");
      }
    } catch {
      setError("Failed to process subscription");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1>Subscribe to Brainly Pro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div> */}
        <PaymentElement />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button
          type="submit"
          variant="primary"
          disabled={!stripe || isLoading}
          className="w-full"
          text={isLoading ? "Processing..." : "Subscribe Now"}
        ></Button>
      </form>
    </div>
  );
}

const SubscriptionWrapper = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-subscription`,
          {
            email: "balyuvraj14@gmail.com", // Email will be replaced when submitted
            priceId: "price_1QcVtf2KBMentevwP3izOLWY",
          },
          {
            headers: {
              authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error fetching client secret", err);
      }
    };

    fetchClientSecret();
  }, []);

  if (!clientSecret) {
    return <div>Loading...</div>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: { theme: "stripe" },
      }}
    >
      <SubscriptionForm />
    </Elements>
  );
};

export default SubscriptionWrapper;
