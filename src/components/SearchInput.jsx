export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <input
      type="search"
      className="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      aria-label={placeholder}
    />
  );
}
