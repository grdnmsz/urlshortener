import dbConnect from "../../controllers/mongodb";

const handler = async (req, res) => {
  const method = { req };
  await dbConnect();

  switch (method) {
    default:
      res.status(200).json("coucou");
  }
};

export default handler;
