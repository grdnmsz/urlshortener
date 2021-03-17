import base62 from "uuid-base62";
import md5 from "md5";

const generateKey = (url: string) => {
  /*
    Take the md5 hash of the url,
    encode it to base62
    return the first 7 digits
  */
  const longKey = base62.encode(md5(url + new Date()));
  return longKey.slice(0,8);
};

export default generateKey;
