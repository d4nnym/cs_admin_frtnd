import axios from "axios";

export const postProfile = async (data) => {

  try {
    const axiosConfig = axios.create({
      withCredentials: true,
      credentials: "include",
      baseURL: "http://localhost:8000",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const res = await axiosConfig.post(
      "http://localhost:8000/api/registro/login",
      data
    );
    console.log(res.data.persona, res.jwt);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postRegister = async ({...data},token) => {
  try {
    const axiosConfig = axios.create({
      withCredentials: true,
      credentials: "include",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`,
      },
    });

    const res = await axiosConfig.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}api/registro/empleado`,
      data
    );
    console.log(res.data.persona, res.jwt);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
