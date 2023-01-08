import { useContext } from "@/components/ContextProvider.jsx"
import ListForm from "@/components/ListForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateListPage = () => {
  const { createList } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createList(values)
      router.push("/")
    },
    [router, createList]
  )

  return <ListForm onSubmit={handleSubmit} />
}

export default CreateListPage
