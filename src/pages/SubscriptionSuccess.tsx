import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
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
  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Success checkmark with animation */}
        <div className="mb-8">
          <div className="h-24 w-24 rounded-full bg-green-100 mx-auto flex items-center justify-center animate-bounce">
            <Check className="h-12 w-12 text-green-500" strokeWidth={3} />
          </div>
        </div>

        {/* Success message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for upgrading to BrainlyAI Pro
        </p>

        {/* Loading indicator */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-1 w-48 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 animate-progress rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500">Redirecting you to home...</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
