import { useContext } from "@/components/ContextProvider.jsx"
import ToDoForm from "@/components/ToDoForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      taskId: Number.parseInt(params.taskId, 10),
    },
  },
})

const TaskEditPage = (props) => {
  const {
    params: { taskId },
  } = props
  const { updateTask, tasks } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateTask(values)
      router.push("/")
    },
    [router, updateTask]
  )

  return (
    <ToDoForm
      onSubmit={handleSubmit}
      initialValues={tasks.find(({ id }) => id === taskId)}
    />
  )
}

export default TaskEditPage
