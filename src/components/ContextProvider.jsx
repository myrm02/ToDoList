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
      { id: 1, name: "JavaScript DOM", selected: false },
      { id: 2, name: "Rust 101", selected: false },
      { id: 3, name: "HTML/CSS templating", selected: false },
    ],
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [listId, setListId] = useState(2)
  const [taskId, setTaskId] = useState(4)
  const [lists, setList] = useState(initialLists)
  const [tasks, setTask] = useState(
    initialLists && initialLists.map((item) => item.tasks)
  )
  const [currentList, setCurrentList] = useState(0)
  const [maskedTask, toggleFilter] = useState(false)

  const getListId = useCallback(() => {
    setListId(listId + 1)

    return listId
  }, [listId])

  const getTaskId = useCallback(() => {
    setTaskId(taskId + 1)

    return taskId
  }, [taskId])

  const createList = useCallback(
    (list) => {
      setList((lists) => [
        ...lists,
        {
          id: getListId(),
          name: list,
          tasks: [
            {
              id: getTaskId,
              name: "",
              selected: false,
            },
          ],
        },
      ])
    },
    [getListId, getTaskId]
  )

  const createTask = useCallback(
    (task, currentList) => {
      const newTask = lists.slice()
      newTask[currentList].tasks.push({
        id: getTaskId(),
        name: task,
        selected: false,
      })
      setList(newTask)
    },

    [getTaskId, lists]
  )

  const deleteList = useCallback(
    (listId) => setList((lists) => lists.filter(({ id }) => id !== listId)),
    []
  )

  const deleteTask = useCallback(
    (taskId, currentList) => {
      const deletedTask = lists.slice()
      deletedTask[currentList].tasks = deletedTask[currentList].tasks.filter(
        ({ id }) => id !== taskId
      )
      setList(deletedTask)
    },
    [lists]
  )

  const updateList = useCallback((updatedToDo, listId) => {
    setList((lists) =>
      lists.map((list) =>
        list.id === listId
          ? { id: list.id, name: updatedToDo, tasks: list.tasks }
          : list
      )
    )
  }, [])

  const updateTask = useCallback(
    (updatedTask, currentList) => {
      const updatedToDoTask = lists.slice()
      updatedToDoTask[currentList].tasks = updatedToDoTask[
        currentList
      ].tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      setList(updatedToDoTask)
    },
    [lists]
  )

  return (
    <Context.Provider
      {...props}
      value={{
        lists,
        currentList,
        tasks,
        maskedTask,
        createList,
        createTask,
        deleteList,
        deleteTask,
        updateList,
        updateTask,
        toggleFilter,
        setCurrentList,
        setTask,
      }}
    />
  )
}

export default ContextProvider
