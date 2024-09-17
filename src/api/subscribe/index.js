export default async function handler(req, res) {
  const firstName = req.body.firstName;
  const email = req.body.email;

  try {
    res.json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Error' });
  }
}
