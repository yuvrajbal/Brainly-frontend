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

export const getUserDetails = async () => {
  const token = localStorage.getItem("token")
  try{
    const response = await axios.get(`${baseUrl}getuser`, {
      headers:{
        authorization:token
      }
    })
    if(response.status === 200){
      return response.data
    }
  }catch(err){
    console.log("error fetching user")
  }
}
export const getSubscriptionStatus = async () => {
  const token = localStorage.getItem("token")
  try{
    const response = await axios.get(`${baseUrl}get-status`,{
      headers:{
        authorization:token
      }
    } )
    if(response.status === 200){
      return response.data.status
    }
  }catch(err){
    console.log("error while fetching status")
  }

}

export const getDocumentUploadStatus = async () => {
  const token = localStorage.getItem("token")

  try{
    const response = await axios.get(`${baseUrl}get-documentupload-status` , {
      headers:{
        authorization:token
      }
    })
    if(response.status === 200){
      return response.data.canUpload
    }
  }catch(err){
    console.log("Error while fetching document upload status")

  }
}

export const resetPassword = async (oldPassword:string,newPassword:string) => {
  const token = localStorage.getItem("token");
  try{
    const response = await axios.post(`${baseUrl}resetpassword`, {
      oldPassword:oldPassword,
      newPassword:newPassword
      } , {headers:{
      authorization:token

    }})
    if(response.status === 200){
      return true
    }
  }catch(err){
    console.log("error updating password")
    return false
  }
}

export const getStripeSubscription = async (subscriptionId:string) => {
  try{
    const response =await axios.get(`${baseUrl}subscription/${subscriptionId}` , {
      headers:{
        authorization:localStorage.getItem("token")
      }
    })
    if(response.status===200){
      return response.data
    }
  }catch(err){
    console.log("error fetching subscription")
    return false
  }
}