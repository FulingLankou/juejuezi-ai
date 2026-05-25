export default async function handler(req, res) {
  const { prompt } = req.body;

  // 这里先用模拟图（下一步我们接真实AI）
  const image = "https://picsum.photos/600/600";

  res.status(200).json({ image });
}
