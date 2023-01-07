// import classNames from "classnames"
import NextLink from "next/link"

const Link = (props) => {
  const { ...otherProps } = props

  return (
    <NextLink
      {...otherProps}
      // className={classNames("hover:underline", className)}
    />
  )
}

export default Link
