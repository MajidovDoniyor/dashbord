// import axios from "axios";

// const postAxios = axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.data;
//   })
//   .catch((error) => {});

// export default postAxios;

import axios from "axios";

export const postAxios = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
