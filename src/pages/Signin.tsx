import UserSignForm, { userSchemaType } from "@/components/SigninUp";
import { signIn } from "@/services/userService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleSignIn = async (data: userSchemaType) => {
    try {
      const response = await signIn(data);

      if (response === 200) {
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      // Error handling is managed by signIn function
      console.error("Signin navigation error", error);
    }
  };
  return (
    <main className="mx-auto max-w-5xl pt-20 flex justify-center ">
      <UserSignForm type="signin" submit={handleSignIn} />
    </main>
  );
}
