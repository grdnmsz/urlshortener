import { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "../../controllers/mongodb";
import UrlModel, { IUrl } from "../../models/url";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST": {
      await dbConnect();
      const { urlToShort } = req.body;
      // checking input url in DB
      const urlInDB = await UrlModel.findOne({
        url: `${urlToShort}`,
      }).catch((error) => {
        return res.status(500).send(error.message);
      });

      if (urlInDB) {
        return res.status(200).send(urlInDB.shortUrl); // return it if we found it
      } else {
        const newUrlShort: IUrl = new UrlModel({
          url: urlToShort,
          shortUrl: urlToShort,
        });

        try {
          // saving in DB and return the short url created
          newUrlShort.save();
          return res.status(200).send(newUrlShort.shortUrl);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    }
    default:
      return res.status(403).send("Can't access");
  }
};
