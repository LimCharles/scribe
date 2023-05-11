import multer from "multer";
const pdf = require("pdf-parse");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory as Buffers
});

const handler = async (req, res) => {
  if (req.method == "POST") {
    // Parse req
    upload.any()(req, res, async (err) => {
      if (err) {
        return res.status(500).send("Internal server error");
      }
      const file = req.files[0];
      const fileBuffer = Buffer.from(file.buffer);
      pdf(fileBuffer)
        .then((data) => {
          const text = data.text;
          const { length, pages } = req.body;
          console.log(length);
          console.log(pages);
          console.log(text);

          return res.status(200).send("Success");
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).send("Internal server error");
        });
    });
  } else {
    return res.status(403).send(`${req.method} Not Allowed`);
  }
};

export const config = {
  api: {
    bodyParser: false,
    serverTimeout: 30000,
  },
};

export default handler;
