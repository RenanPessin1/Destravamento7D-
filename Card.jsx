
export function Card({ children }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      borderRadius: '0.5rem',
      maxWidth: '400px',
      width: '100%',
      margin: 'auto'
    }}>
      {children}
    </div>
  );
}
