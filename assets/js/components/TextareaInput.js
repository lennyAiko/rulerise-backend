const TextareaInput = ({ id, label, value, changeData, className = '' }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="pl-2" htmlFor="description">
        {label}
      </label>
      <textarea
        value={value}
        // @ts-ignore
        onChange={(e) => changeData(id, e.target.value)}
        id={id}
        name={id}
        className={`border font-bold ${className} rounded-lg py-2 pl-3`}
      />
    </div>
  )
}

export default TextareaInput
