import classNames from "classnames"

const variants = {
  primary: "",
  secondary: "",
}

const sizes = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base font-semibold",
}

const Button = (props) => {
  const { variant = "primary", size = "md", className, ...otherProps } = props

  return (
    <button
      className={classNames(variants[variant], sizes[size], className)}
      {...otherProps}
    />
  )
}

export default Button
