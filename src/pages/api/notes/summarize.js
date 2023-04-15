const handler = async (req, res) => {
  if (req.method == "POST") {
    // Parse req
    const { length, pages } = req.body;
    console.log(req.body);
    console.log(length);
    console.log(pages);
    return res.status(200).send("SAD");
  } else {
    return res.status(403).send(`${req.method} Not Allowed`);
  }
};

export default handler;
