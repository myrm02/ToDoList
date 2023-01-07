import * as yup from "yup"

export const descriptionValidator = yup
  .string()
  .matches(
    /^[a-z][a-z0-9_]{1,}$/,
    "Your username must start with a lower case letter and contain only digits or letters or `_`"
  )
  .label("Description")

// export const favoriteColorValidator = yup
//   .string()
//   .matches(/^#[0-9a-f]{6}$/, "Color must be in #RRGGBB format")
//   .label("Favorite color")
