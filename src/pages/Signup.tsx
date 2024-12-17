import UserSignForm, { userSchemaType } from "@/components/SigninUp";
import { signUp } from "@/services/userService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleSignUp = async (data: userSchemaType) => {
    try {
      const response = await signUp(data);

      if (response === 200) {
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      console.error("Signin error", error);
    }
  };
  return (
    <main className="mx-auto max-w-5xl p-2 min-h-screen flex justify-center mt-16">
      <UserSignForm type="signup" submit={handleSignUp} />
    </main>
  );
}
