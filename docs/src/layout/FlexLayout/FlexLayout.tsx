export default function FlexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: 400, padding: 30 }}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div
          style={{
            height: 60,
            flexShrink: 0,
            background: "rgba(255,255,255,0.1)",
          }}
        />

        <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
          <div style={{ width: 200, background: "gray", flexShrink: 0 }} />
          {children}
        </div>
      </div>
    </div>
  );
}
