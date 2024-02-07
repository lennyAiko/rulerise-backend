const Default = ({ text, type, doThis, className = '', disabled = false }) => {
  return (
    <button
      className={`rounded-lg bg-primary p-2 text-sm text-white hover:bg-primary/80 lg:text-base ${className}`}
      type={type}
      onClick={doThis}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Default
