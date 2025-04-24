
export function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        flex: 1,
        padding: '0.5rem',
        borderRadius: '0.25rem',
        border: '1px solid #ccc'
      }}
    />
  );
}
