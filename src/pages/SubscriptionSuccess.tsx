import { useEffect } from "react";
import axios from "axios";

function SubscriptionSuccess() {
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");

  const savePayment = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/v1/save-payment`,
      {
        session_id: sessionId,
      },
      {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
  };
  useEffect(() => {
    if (sessionId) {
      savePayment();
    }
  }, [sessionId]);
  // const [paymentStatus, setPaymentStatus] = useState("");
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const paymentIntent = queryParams.get("payment_intent");
  //   const clientSecret = queryParams.get("payment_intent_client_secret");

  //   if (paymentIntent && clientSecret) {
  //     // Call your backend to verify the payment status or perform any other logic
  //     axios
  //       .post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/verify-payment`, {
  //         paymentIntent,
  //         clientSecret,
  //       })
  //       .then((response) => {
  //         setPaymentStatus("Payment Successful");
  //       })
  //       .catch((error) => {
  //         setPaymentStatus("Payment Verification Failed");
  //       });
  //   } else {
  //     setPaymentStatus("Invalid Payment Information");
  //   }
  // }, [location.search]);

  // const gobackHome = () => {
  //   navigate("/home");
  // };
  // const goBacksubscribe = () => {
  //   navigate("/subscribe");
  // };
  // return (
  //   <div className="flex items-center justify-center min-h-screen flex-col gap-4">
  //     <h1 className="font-semibold text-3xl dark:text-gray-300 text-gray-900">
  //       {paymentStatus === "Payment Successful"
  //         ? "Thanks for Joining BrainlyAI"
  //         : "Payment was not successful try again"}
  //     </h1>
  //     <div>
  //       {paymentStatus === "Payment Successful" ? (
  //         <Button
  //           variant="secondary"
  //           onClick={gobackHome}
  //           text={"Go back to Home"}
  //         />
  //       ) : (
  //         <Button
  //           variant="secondary"
  //           onClick={goBacksubscribe}
  //           text={"Pay Again"}
  //         />
  //       )}
  //     </div>
  //   </div>
  // );
  return <div className="text-5xl dark:text-white text-gray-900">success</div>;
}

export default SubscriptionSuccess;
