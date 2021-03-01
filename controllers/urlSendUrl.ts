import axios from "axios";

export const sendUrl = async (url: string) => {
  try {
    const resp = await axios.post(
      `/api/createShortUrl`,
      {
        urlToShort: url,
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
