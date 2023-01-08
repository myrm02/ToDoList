import classNames from "classnames"

const Input = (props) => {
  const { className, name, onChange } = props

  return (
    <input
      name={name}
      onChange={onChange}
      className={classNames("border-2 px-3 py-1.5", className)}
    />
  )
}

export default Input
