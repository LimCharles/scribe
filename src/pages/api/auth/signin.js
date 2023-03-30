export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, provider } = req.body;
    if (provider == "facebook") {
    } else if (provider == "google") {
    } else if (!email || !password)
      return res.status(400).send("Invalid email or password");

    if (getApps.length < 1) {
      initializeApp(firebaseConfig);
    }
  } else {
    res.status(405).send("Invalid method.");
  }
}
