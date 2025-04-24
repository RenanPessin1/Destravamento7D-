
export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: '0.5rem 1rem',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  );
}
