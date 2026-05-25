export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  // 👉 先返回模拟图片（保证系统跑通）
  const images = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3"
  ];

  const image = images[Math.floor(Math.random() * images.length)];

  return res.status(200).json({
    image,
    prompt,
    status: "success"
  });
}
