const NavButton = (page: string) => {
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

export default NavButton;
