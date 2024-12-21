import axios from "axios";

const BaseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`

export const deleteContent = async (id:string) => {
  try{
    const response = await axios.delete( `${BaseUrl}` , {
      data:{contentId:id},
      headers:{
        authorization:  `${localStorage.getItem("token")}`
      }
    })
    return response.data
  }catch(err){
    console.error("delete req err", err)
  }
}