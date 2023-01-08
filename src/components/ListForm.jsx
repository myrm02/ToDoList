import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import { descriptionValidator } from "@/validators.js"
import classNames from "classnames"
import { Form, Formik } from "formik"
import * as yup from "yup"
import FormHeader from "@/components/FormHeader"

const defaultValidationSchema = yup.object().shape({
  name: descriptionValidator.required(),
})

const defaultInitialValues = {
  name: "",
}

const ListForm = (props) => {
  const {
    className,
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <FormHeader title={"Edit list"}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className={classNames("flex flex-col gap-4 p-4", className)}>
          <FormField name="name" label="Description" />
          <Button className="mt-8">Cancel</Button>
          <Button type="submit" className="mt-8">
            Create
          </Button>
        </Form>
      </Formik>
    </FormHeader>
  )
}

export default ListForm
