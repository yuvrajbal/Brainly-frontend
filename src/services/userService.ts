import { userSchemaType } from "@/components/SigninUp";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {toast} from "sonner"
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/`;
export const signUp = async (data:userSchemaType) => {
  try{
    const response = await axios.post(`${baseUrl}signup`, data)
    console.log(response.data.token)
    const token = response.data.token
    localStorage.setItem("token", token)
    toast.success('Sign up successful', {
      description:'Welcome to brainly',
      duration:3000
    })
    return response.status
  }catch(err){
    // error toast
    const errorMessage = err.response?.data?.message || "Sign up failed";
    toast.error("Sign up error", {
      description:errorMessage,
      duration:3000
    })
    console.log("error while signing up", err)
    return err
  }
}
export const signIn = async (data:userSchemaType) => {

  try{
    const response = await axios.post(`${baseUrl}signin`, data)
    console.log(response.data.token)
    const token = response.data.token
    localStorage.setItem("token", token)
    toast.success('Sign in successful', {
      description:'Welcome to brainly',
      duration:3000
    })
    return response.status
  
    
    
  }catch(err){
    // error toast
    const errorMessage = err.response?.data?.message || "Sign up failed";
    toast.error("Sign in error", {
      description:errorMessage,
      duration:3000
    })
    console.log("error while signing in", err)
    return err
  }
}