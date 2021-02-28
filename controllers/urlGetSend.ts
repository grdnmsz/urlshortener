import axios from "axios";

export const getUrl = () => {};

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
    console.log(resp);
    return resp;
  } catch (error) {
    return Promise.reject(error);
  }
};
