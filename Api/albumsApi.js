import axios from "axios";

export const albumsAxios = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
