import { useState } from "react";

export default function Studio() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    setLoading(true);

    // 这里后面会接 AI（现在先做UI）
    setTimeout(() => {
      setImage("https://picsum.photos/600/600");
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5f7",
      padding: "60px 20px",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        maxWidth: 1000,
        margin: "0 auto"
      }}>

        <h1 style={{
          fontSize: 40,
          fontWeight: 700
        }}>
          AI商品海报生成器
        </h1>

        <p style={{ color: "#666", marginTop: 10 }}>
          输入商品描述，一键生成电商级营销海报
        </p>

        {/* 输入区 */}
        <div style={{
          marginTop: 30,
          background: "white",
          padding: 20,
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
        }}>
          
          <textarea
            placeholder="例如：夏季防晒喷雾，清爽蓝色风格，亚马逊电商主图"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{
              width: "100%",
              height: 100,
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 12,
              fontSize: 14
            }}
          />

          <button
            onClick={generateImage}
            style={{
              marginTop: 15,
              background: "#111",
              color: "white",
              padding: "12px 20px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer"
            }}
          >
            {loading ? "生成中..." : "生成电商海报"}
          </button>
        </div>

        {/* 输出区 */}
        {image && (
          <div style={{
            marginTop: 30,
            background: "white",
            padding: 20,
            borderRadius: 16,
            textAlign: "center"
          }}>
            <img
              src={image}
              style={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 12
              }}
            />
          </div>
        )}

      </div>
    </div>
  );
  }
