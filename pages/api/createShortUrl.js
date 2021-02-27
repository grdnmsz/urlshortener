import dbConnect from "../../controllers/mongodb";

export default async function handler(req, res) {
  const method = { req }
  await dbConnect();

  switch(method) {
    default:
      res.status(200).json("coucou");
  }
}
