export default function BlobField() {
  return (
    <>
      {/* BLOB 1 — largest, coral/orange */}
      <div
        style={{
          width: "340px",
          height: "300px",
          background:
            "radial-gradient(circle at 40% 35%, #F2C4A0, #E85D24, #C94420)",
          borderRadius: "60% 40% 55% 45% / 50% 55% 45% 50%",
          position: "absolute",
          top: "5%",
          right: "5%",
          opacity: 0.9,
          zIndex: 0,
          animation: "float-1 6s ease-in-out infinite",
        }}
      />

      {/* BLOB 2 — medium, peach */}
      <div
        style={{
          width: "220px",
          height: "200px",
          background:
            "radial-gradient(circle at 35% 30%, #F5CAA8, #E8926A)",
          borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%",
          position: "absolute",
          top: "40%",
          right: "28%",
          opacity: 0.85,
          zIndex: 0,
          animation: "float-2 8s ease-in-out infinite",
          animationDelay: "-2s",
        }}
      />

      {/* BLOB 3 — silver/glass sphere */}
      <div
        style={{
          width: "160px",
          height: "140px",
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.92), rgba(200,195,190,0.65))",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow:
            "inset 0 0 30px rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.08)",
          position: "absolute",
          top: "15%",
          right: "38%",
          opacity: 0.8,
          zIndex: 0,
          animation: "float-3 5s ease-in-out infinite",
          animationDelay: "-1s",
        }}
      />

      {/* BLOB 4 — small, warm */}
      <div
        style={{
          width: "100px",
          height: "90px",
          background:
            "radial-gradient(circle at 40% 35%, #F5CAA8, #E07D50)",
          borderRadius: "55% 45% 50% 50% / 50% 55% 45% 55%",
          position: "absolute",
          bottom: "10%",
          right: "10%",
          opacity: 0.75,
          zIndex: 0,
          animation: "float-4 7s ease-in-out infinite",
          animationDelay: "-3s",
        }}
      />

      {/* BLUE DOT 1 */}
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#2B3FF5",
          position: "absolute",
          top: "30%",
          right: "55%",
        }}
      />

      {/* BLUE DOT 2 */}
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#2B3FF5",
          position: "absolute",
          bottom: "20%",
          right: "45%",
        }}
      />
    </>
  );
}
