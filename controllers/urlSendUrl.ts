import axios from "axios";

const sendUrl = async (url: string) => {
  try {
    const resp = await axios.post(
      `/api/createShortUrl`,
      {
        url: url,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resp.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default sendUrl;
