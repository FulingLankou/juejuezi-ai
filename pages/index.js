export default function Home() {
  return (
    <div style={{
      background: "#f5f5f7",
      minHeight: "100vh",
      fontFamily: "Arial",
      color: "#111"
    }}>
      
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 20px"
      }}>
        
        <h1 style={{
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: -1
        }}>
          绝绝子电商AI
        </h1>

        <p style={{
          fontSize: 18,
          color: "#666",
          marginTop: 12
        }}>
          一键生成亚马逊级商品图 · 海报 · 营销视觉
        </p>

        <div style={{
          marginTop: 50,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20
        }}>
          
          {[
            "AI商品海报",
            "AI换背景",
            "AI商品图增强"
          ].map((item, i) => (
            <div
  onClick={() => window.location.href = "/studio"}
  style={{
    background: "white",
    borderRadius: 16,
    padding: 24,
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
  }}
>
  <h3>AI商品海报</h3>
  <p style={{color:"#888", marginTop:8}}>
    点击进入生成工作台
  </p>
</div>
          ))}
          
        </div>

      </div>

    </div>
  );
}
