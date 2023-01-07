import classNames from "classnames"

const ColorInput = (props) => {
  const { className, ...otherProps } = props

  return (
    <span className="flex gap-2">
      <input
        {...otherProps}
        className={classNames("border-2 h-10 w-10", className)}
      />
    </span>
  )
}

export default ColorInput
