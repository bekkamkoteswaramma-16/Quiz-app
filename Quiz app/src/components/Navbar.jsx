const Navbar = ({ title }) => {
  return (
    <nav style={{ background: '#e328a2', color: 'white', padding: '15px', textAlign: 'center' }}>
      <h2>{title}</h2>
    </nav>
  );
};
export default Navbar;