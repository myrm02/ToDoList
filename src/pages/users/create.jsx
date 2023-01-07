import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import UserForm from "@/components/ToDoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateUserPage = () => {
  const { createUser } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createUser(values)
      router.push("/")
    },
    [router, createUser]
  )

  return (
    <Page>
      <UserForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateUserPage
