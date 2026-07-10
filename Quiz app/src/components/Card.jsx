const Card = ({ children }) => {
  return (
    <div style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '12px', width: '200px', backgroundColor: '#fff' }}>
      {children}
    </div>
  );
};
export default Card;