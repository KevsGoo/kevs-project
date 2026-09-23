export default function Label({ text, htmlFor, className, required }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text} {required && <span>*</span>}
    </label>
  )
}