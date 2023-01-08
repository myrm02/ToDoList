import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react"

const initialLists = [
  {
    id: 1,
    name: "Homework",
    tasks: [
      { id: 1, name: "JavaScript DOM" },
      { id: 2, name: "Rust 101" },
      { id: 3, name: "HTML/CSS templating" },
    ],
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [listId, setListId] = useState(2)
  const [taskId, setTaskId] = useState(4)
  const [lists, setList] = useState(initialLists)
  const [tasks, setTask] = useState(initialLists.map((item) => item.tasks))

  const getListId = useCallback(() => {
    setListId(listId + 1)

    return listId
  }, [listId])

  const getTaskId = useCallback(() => {
    setTaskId(taskId + 1)

    return taskId
  }, [taskId])

  const createList = useCallback(
    (user) => {
      setList((users) => [
        ...users,
        {
          id: getListId(),
          ...user,
        },
      ])
    },
    [getListId]
  )

  const createTask = useCallback(
    (task) => {
      setTask((tasks) => [
        ...tasks,
        {
          id: getTaskId(),
          ...task,
        },
      ])
    },
    [getTaskId]
  )

  const deleteList = useCallback(
    (listId) => setList((lists) => lists.filter(({ id }) => id !== listId)),
    []
  )

  const deleteTask = useCallback(
    (taskId) => setTask((tasks) => tasks.filter(({ id }) => id !== taskId)),
    []
  )

  const updateList = useCallback((updatedList) => {
    setList((lists) =>
      lists.map((list) => (list.id === updatedList.id ? updatedList : list))
    )
  }, [])

  const updateTask = useCallback((updatedTask) => {
    setTask((tasks) =>
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    )
  }, [])

  return (
    <Context.Provider
      {...props}
      value={{
        lists,
        tasks,
        createList,
        createTask,
        deleteList,
        deleteTask,
        updateList,
        updateTask,
      }}
    />
  )
}

export default ContextProvider
