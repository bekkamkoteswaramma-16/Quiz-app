const Button = ({ text, onClick, color = '#4F46E5', disabled = false }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{ background: disabled ? 'gray' : color, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', margin: '5px' }}
    >
      {text}
    </button>
  );
};
export default Button;