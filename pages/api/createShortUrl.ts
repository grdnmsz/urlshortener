import { NextApiRequest, NextApiResponse } from "next";
import { useState } from "react";
import dbConnect from "../../controllers/mongodb";
import UrlModel, { IUrl } from "../../models/url";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  let urlsInDB = <IUrl>{};
  switch (method) {
    case "POST": {
      await dbConnect();
      const { url } = req.body;
      // looking for the same url that might be in db already
      await UrlModel.findOne({ url: `${url}` })
        .then((resp) => {
          urlsInDB = resp;
        })
        .catch((error) => {
          return res.status(500).send(error.message);
        });

      if (urlsInDB) {
        return res.status(200).send(urlsInDB.shortUrl); // return it if we found it
      } else {
        const newUrlShort: IUrl = new UrlModel({
          url: url,
          shortUrl: url,
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
