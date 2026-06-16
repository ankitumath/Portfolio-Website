import axios from "axios";

const API_URL = "https://portfolio-website-4sbs.onrender.com/api/contact";

export const sendContactMessage = async (formData) => {
  const response = await axios.post(API_URL, formData);

  return response.data;
};