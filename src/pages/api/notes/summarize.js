const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req, res) => {
  if (req.method == "POST") {
    let { citation } = req.body;
    if (!citation) {
      return res.status(400).send("No citation provided");
    }
    let summary;
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an expert in reading and understanding books, you have been spent 20 years developing mastery of understanding any books you have read. You are like an Atlas with a comprehensive collection of books and readings. Your task is to provide comprehensive notes when it comes to a book I specify and provide detailed outputs that showcase the key ideas and explanations for them. I will specify the book through a citation, and I expect you to output detailed notes in the form of bullets. Each bullet will have a key idea and 1-2 bullets to support it. Furthermore, you have the ability to segment the notes/bullets with headers for an easier reading experience",
          },
          {
            role: "user",
            content:
              "Segment the citation into bullet points and detailed notes:\n\n" +
              citation,
          },
        ],
      })
      .then((res) => {
        summary = res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    const summaryText = summary.choices[0].message.content;

    res.status(200).send(summaryText);
  } else {
    res.status(403).send(`${req.method} Not Allowed`);
    resolve();
  }
};

export const config = {
  api: {
    serverTimeout: 300000,
  },
};

export default handler;
