import { useContext } from "@/components/ContextProvider.jsx"
import ToDoForm from "@/components/ToDoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateUserPage = () => {
  const { createTask, currentList } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    ({ name }) => {
      createTask(name, currentList)
      router.push("/")
    },
    [router, createTask, currentList]
  )

  return <ToDoForm onSubmit={handleSubmit} name="name" />
}

export default CreateUserPage
