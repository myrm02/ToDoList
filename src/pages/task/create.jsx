import { useContext } from "@/components/ContextProvider.jsx"
import ToDoForm from "@/components/ToDoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateUserPage = () => {
  const { createTask } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createTask(values)
      router.push("/")
    },
    [router, createTask]
  )

  return <ToDoForm onSubmit={handleSubmit} />
}

export default CreateUserPage
