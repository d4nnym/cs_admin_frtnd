import axios from 'axios';

export const postProfile = async (data) => {
  try {
    const axiosConfig = axios.create({
      withCredentials: true,
      credentials: "include",
      baseURL: 'https://cs-server-bcknd.onrender.com',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },});
      const res = await axiosConfig.post(
        'https://cs-server-bcknd.onrender.com/api/registro/login',
        data
      );      
      console.log(res.data.persona,res.headers['set-cookie']);
      return res.data
  }catch (error) {
    console.error(error);
  }
}

