import { userSchemaType } from "@/components/SigninUp";
import axios, { AxiosError } from "axios"
import {toast} from "sonner"
const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/`;
interface ErrorResponse {
  message: string;
}
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
    const error = err as AxiosError<ErrorResponse>;
    const errorMessage = error.response?.data?.message || "Sign up failed";
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

    const error = err as AxiosError<ErrorResponse>;
    const errorMessage = error.response?.data?.message || "Sign up failed";
    toast.error("Sign in error", {
      description:errorMessage,
      duration:3000
    })
    console.log("error while signing in", err)
    return err
  }
}

export const getUsername = async () => {
  const token = localStorage.getItem("token")
  try{
    const response = await axios.get(`${baseUrl}getusername`,{
      headers:{
        authorization:token
      }
    } )
    if(response.status === 200){
      return response.data.username
    }
  }catch(err){
    console.log("error while getting username")
  }

}