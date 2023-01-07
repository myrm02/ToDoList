import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import ToDoForm from "@/components/ToDoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateUserPage = () => {
  const { createToDo } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createToDo(values)
      router.push("/")
    },
    [router, createToDo]
  )

  return (
    <Page>
      <ToDoForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateUserPage
