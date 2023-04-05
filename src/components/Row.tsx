export const Row = (props: { children?: any }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
      {props.children}
    </div>
  );
};
