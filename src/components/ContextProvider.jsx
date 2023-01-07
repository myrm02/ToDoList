import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react"

const initialUsers = [
  {
    id: 1,
    username: "avetisk",
    email: "avetis@kazarian.fr",
    favoriteColor: "#00ffff",
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextId, setNextId] = useState(2)
  const [users, setUsers] = useState(initialUsers)
  const getNextId = useCallback(() => {
    setNextId(nextId + 1)

    return nextId
  }, [nextId])
  const createUser = useCallback(
    (user) => {
      setUsers((users) => [
        ...users,
        {
          id: getNextId(),
          ...user,
        },
      ])
    },
    [getNextId]
  )
  const deleteUser = useCallback(
    (userId) => setUsers((users) => users.filter(({ id }) => id !== userId)),
    []
  )
  const updateUser = useCallback((updatedUser) => {
    setUsers((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    )
  }, [])

  return (
    <Context.Provider
      {...props}
      value={{
        users,
        createUser,
        deleteUser,
        updateUser,
      }}
    />
  )
}

export default ContextProvider
