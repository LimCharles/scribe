const { OAuth2Client } = require("google-auth-library");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "postmessage"
    );
    const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
    console.log(tokens);

    return res.status(200).json({ tokens });
  } else {
    return res.status(403).send(`${req.method} Not Allowed`);
  }
};

export default handler;
