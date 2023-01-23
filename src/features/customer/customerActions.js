import axios from "axios"

export const getCustomerData = () =>dispatch=>{
  axios
  .get("../../data.json")
  .then((res)=>{
    console.log(res)
    dispatch ({type:"CUSTOMER_DATA",payload:res.data})

  })
}