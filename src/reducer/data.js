import { RECEIVE_API_DATA } from "../action";

export default (state = {}, { type, data }) => {
      
  switch (type) {
    
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};