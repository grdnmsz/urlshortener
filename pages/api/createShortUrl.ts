import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../controllers/mongodb";
import UrlModel, { IUrl } from "../../models/url";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      const { urlToShort } = req.body;
      // checking input url in DB
      const urlInDB = await UrlModel.findOne({ longUrl: urlToShort }).catch(
        (error) => {
          console.log(error);
        }
      );

      if (urlInDB) {
        return res.status(200).json(urlInDB); // return it if we found it
      } else {
        const newUrlShort: IUrl = new UrlModel({
          longUrl: urlToShort,
          shortUrl: "google.com",
        });

        try {
          // saving in DB and return the short url created
          newUrlShort.save();
          return res.status(200).send(newUrlShort.shortUrl);
        } catch (error) {
          res.status(400).send(error.message);
        }
      }
  }
};

export default handler;
