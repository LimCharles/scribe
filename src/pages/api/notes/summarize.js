import multer from "multer";
const pdf = require("pdf-parse");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
const upload = multer({
  storage: multer.memoryStorage(), // Store files in memory as Buffers
});

const handler = async (req, res) => {
  if (req.method == "POST") {
    // Parse req
    return new Promise((resolve, reject) => {
      upload.any()(req, res, async (err) => {
        if (err) {
          return res.status(500).send("Internal server error");
        }
        const file = req.files[0];
        const fileBuffer = Buffer.from(file.buffer);
        pdf(fileBuffer)
          .then(async (data) => {
            const text = data.text;
            const { length, pages } = req.body;

            let summary;

            await openai
              .createCompletion({
                model: "text-davinci-003",
                prompt: `Summarize the following ${length} pages of text into ${pages} pages:\n${text}\n\nSummary:`,
              })
              .then((res) => {
                summary = res.data;
              })
              .catch((err) => {
                console.log(err.response.data);
              });

            console.log(summary);
            const summaryText = summary.choices[0].text;

            res.status(200).end(summaryText);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            res.status(500).send("Internal server error");
            resolve();
          });
      });
    });
  } else {
    res.status(403).send(`${req.method} Not Allowed`);
    resolve();
  }
};

export const config = {
  api: {
    bodyParser: false,
    serverTimeout: 30000,
  },
};

export default handler;
