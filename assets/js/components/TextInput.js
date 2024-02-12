const TextInput = ({
  id,
  label,
  value,
  changeData,
  className = '',
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="pl-2" htmlFor={id}>
        {label}:
      </label>
      <input
        type={type}
        value={value}
        id={id}
        name={id}
        // @ts-ignore
        onChange={(e) => changeData(id, e.target.value)}
        className={`border font-bold ${className} rounded-lg py-2 pl-3`}
      />
    </div>
  )
}

export default TextInput
