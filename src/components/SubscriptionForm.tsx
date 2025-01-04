// import React, { useState, useEffect } from "react";
// import {
//   PaymentElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";
// import Button from "./Button";
// import { useNavigate } from "react-router-dom";

// const stripePromise = loadStripe(
//   "pk_test_51PcyV62KBMentevw6jpHzkayyI9e3dFfeV4fFOYyL9Omn1r4WJOJig3Z3EmVpm4xxIi0Xj9vy1JScpio5l3LxEBF00HhI83Eic"
// );

// function SubscriptionForm({ clientSecret }: { clientSecret: string }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState("balyuvraj14@gmail.com");
//   const [name, setName] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setIsLoading(true);
//     setError("");

//     try {
//       if (!email) {
//         setError("Email is required.");
//         return;
//       }

//       // Get payment details from Stripe
//       const { error: submitError } = await elements.submit();
//       if (submitError) {
//         setError(submitError.message || "Payment details validation failed.");
//         return;
//       }

//       // Confirm the payment using Stripe's API with the existing clientSecret
//       const { error: stripeError } = await stripe.confirmPayment({
//         elements,
//         clientSecret,
//         confirmParams: {
//           return_url: `${window.location.origin}/subscription/success`,
//           payment_method_data: {
//             billing_details: {
//               email,
//               name,
//             },
//           },
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message || "An error occurred");
//       }
//     } catch (err) {
//       setError("Failed to process subscription");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Subscribe to Brainly Pro</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>
//         </div>

//         <PaymentElement
//           options={{
//             layout: "tabs",
//             fields: {
//               billingDetails: {
//                 name: "never",
//                 email: "never",
//               },
//             },
//           }}
//         />

//         {error && (
//           <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
//             {error}
//           </div>
//         )}

//         <Button
//           type="submit"
//           variant="pro"
//           disabled={!stripe || isLoading}
//           className="w-full"
//           text={isLoading ? "Processing..." : "Subscribe Now"}
//         />
//       </form>
//     </div>
//   );
// }

// const SubscriptionWrapper = () => {
//   const navigate = useNavigate();
//   const [clientSecret, setClientSecret] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin?redirect=/subscribe");
//       return;
//     }

//     const fetchClientSecret = async () => {
//       try {
//         const response = await axios.post(
//           `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-subscription`,
//           {
//             email: "balyuvraj14@gmail.com",
//             priceId: "price_1QcVtf2KBMentevwP3izOLWY",
//           },
//           {
//             headers: {
//               authorization: token,
//             },
//           }
//         );
//         setClientSecret(response.data.clientSecret);
//       } catch (err) {
//         setError("Failed to initialize payment. Please try again later.");
//         console.error("Error fetching client secret:", err);
//       }
//     };

//     fetchClientSecret();
//   }, [navigate]);

//   if (error) {
//     return <div className="text-red-500 text-center p-4">{error}</div>;
//   }

//   if (!clientSecret) {
//     return (
//       <div className="flex justify-center items-center p-4">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <Elements
//       stripe={stripePromise}
//       options={{
//         clientSecret,
//         appearance: { theme: "night" },
//       }}
//     >
//       <SubscriptionForm clientSecret={clientSecret} />
//     </Elements>
//   );
// };

// export default SubscriptionWrapper;
