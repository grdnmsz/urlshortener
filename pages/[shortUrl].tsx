import dbConnect from "../controllers/mongodb";
import UrlModel from "../models/url";

const _ = () => {
  return null;
};

export const getServerSideProps = async (context) => {
  const { shortUrl } = context.params;

  await dbConnect().catch((error) => {
    console.log("dbConnect() - [shortUrl]: ", error.message);
  });

  try {
    const url = (await UrlModel.findOne({ shortUrl: shortUrl })).url;
    return {
      redirect: {
        destination: url,
        permanent: false,
      },
    };
  } catch (error) {
    console.log(
      `Error caught - findOne({ shortUrl: ${shortUrl} }) : [shortUrl]`,
      error.message
    );
    return {
      redirect: {
        destination: `err/404`,
        permanent: false,
      },
    };
  }
};

export default _;
