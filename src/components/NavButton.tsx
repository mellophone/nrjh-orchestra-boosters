export const NavButton = (page: string) => {
  return (
    <div style={{ flexGrow: 0, alignSelf: "center", paddingRight: 30 }}>
      <a
        href={`/${page.toLowerCase()}`}
        style={{ color: "white", textDecoration: "none", fontWeight: 300 }}
      >
        {page}
      </a>
    </div>
  );
};

export const MobileNavButton = (page: string) => {
  return (
    <div style={{ flexGrow: 0, alignSelf: "center" }}>
      <a
        href={`/${page.toLowerCase()}`}
        style={{ color: "white", textDecoration: "none", fontWeight: 300 }}
      >
        {page}
      </a>
    </div>
  );
};
