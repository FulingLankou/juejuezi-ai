import { useState } from "react";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    if (!prompt) return alert("请输入商品描述");

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setImage(data.image);
    } catch (e) {
      alert("生成失败，请检查API");
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5f7",
      padding: 60,
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: 36 }}>
        AI商品海报生成器
      </h1>

      <p style={{ color: "#666" }}>
        输入商品描述，生成电商级营销海报
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="例如：夏季防晒喷雾，亚马逊风格，高级白底"
        style={{
          width: "100%",
          height: 120,
          marginTop: 20,
          padding: 12,
          borderRadius: 12
        }}
      />

      <button
        onClick={generateImage}
        style={{
          marginTop: 20,
          padding: "12px 20px",
          background: "#111",
          color: "#fff",
          borderRadius: 10,
          cursor: "pointer"
        }}
      >
        {loading ? "生成中..." : "生成电商海报"}
      </button>

      {image && (
        <div style={{ marginTop: 30 }}>
          <img src={image} style={{ width: 400, borderRadius: 12 }} />
        </div>
      )}
    </div>
  );
}
