export default function TextField({label, placeholder, type='text', value, onChange}){
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
    </label>
  )
}
