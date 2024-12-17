import axios from "axios";

const BaseUrl = `${import.meta.env.VITE_BACKEND_URL}/api/v1/content`

export const deleteContent = async (id:string) => {
  try{
    const response = await axios.delete( `${BaseUrl}` , {
      data:{contentId:id},
      headers:{
        authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDNhNWU1YWFkZTI1YTIwNmNhNDNiNCIsImlhdCI6MTczMjQ4NjYyOX0.OcmW4ZDH-adyZfiBvpom3cVjcdsRWkH-w5M2wNbhXL8"
      }
    })
    return response.data
  }catch(err){
    console.error("delete req err", err)
  }
}