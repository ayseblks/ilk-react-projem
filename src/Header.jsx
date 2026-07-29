import { NavLink } from 'react-router-dom';

function Header() {
  const linkStyle = ({ isActive }) => ({
    fontSize: "18px",
    marginRight: "20px",
    fontWeight: "bold",
    color: isActive ? "#8a2be9" : "black",
    textDecoration: isActive ? "underline" : "none"
  });

  return (
    <nav style={{ backgroundColor: "#E6E0F8", padding: "15px", textAlign: "center" }}>
      <NavLink to="/" style={linkStyle}>Ana sayfa</NavLink>
      <NavLink to="/hakkimda" style={linkStyle}>Hakkımda</NavLink>
      <NavLink to="/projelerim" style={linkStyle}>Projelerim</NavLink>
    </nav>
  );
}

export default Header;