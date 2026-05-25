export default async function handler(req, res) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const response = await fetch("https://api.siliconflow.cn/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `sk-qbdrwxbvzdztjrcmpbyrvvbfikfpyanihplvtnlbxymxzaal`
      },
      body: JSON.stringify({
        model: "black-forest-labs/FLUX.1-schnell",
        prompt: `amazon product photo, clean background, professional lighting, ${prompt}`,
        size: "1024x1024"
      })
    });

    const data = await response.json();

    const image = data?.data?.[0]?.url;

    return res.status(200).json({
      image,
      prompt
    });

  } catch (err) {
    return res.status(500).json({
      error: "AI generation failed",
      detail: err.message
    });
  }
}
