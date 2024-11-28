const Button = ({ label, onClick, type = 'button' }) => (
    <button type={type} onClick={onClick} className="button">
      {label}
    </button>
  );
  
  export default Button;
  