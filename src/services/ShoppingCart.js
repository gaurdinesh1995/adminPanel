import axios from "axios";
import { baseUrl } from "../utils/urls";
import {getAuthHeaders} from '../utils';

export const getShoppingItems = () => {
    return axios.get(`${baseUrl}api/user/clusterCubeProductOfFmcg`,{headers:getAuthHeaders()});
  };

  export const addItemes =(data)=>{
    return axios.post(`${baseUrl}api/user/fmcgCarts`,data,{headers:getAuthHeaders()})
  }

  export const getCartItem=()=>{
    return axios.get(`${baseUrl}api/user/fmcgCarts`,{headers:getAuthHeaders()})
  }
  
  export const deleteItem=(itemId)=>{
    return axios.delete(`${baseUrl}api/user/fmcgCarts?cartId=${itemId}`,{headers:getAuthHeaders()})
  }

  export const updateCart=(data,cartId)=>{
  return axios.post(`${baseUrl}api/user/fmcgCarts?cartId=${cartId}`,data,{headers:getAuthHeaders()})
  }