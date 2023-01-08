import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import {
  TrashIcon,
  PencilSquareIcon,
  PlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid"
import { useCallback } from "react"
import Head from "next/head.js"
import Link from "next/link"

const IndexPage = () => {
  const {
    lists,
    tasks,
    currentList,
    updateTask,
    updatedTask,
    deleteTask,
    deleteList,
  } = useContext()

  const handleClickDeleteList = useCallback(() => {
    deleteList(currentList)
  }, [deleteList, currentList])

  const handleClickDeleteTask = useCallback(
    (event) => {
      const taskId = Number.parseInt(
        event.currentTarget.getAttribute("data-task-id"),
        10
      )

      deleteTask(taskId, currentList)
    },
    [deleteTask, currentList]
  )

  const handleToggle = useCallback(() => {
    const updatedTask = {
      id: lists.tasks.id,
      name: lists.tasks.name,
      selected: !lists.tasks.selected,
    }
    updateTask(currentList, updatedTask)
  }, [currentList, updatedTask, lists])

  return (
    <main className="flex flex-col">
      <Head>
        <title>ToDo List</title>
      </Head>
      <table className="w-full mt-8">
        <thead>
          {lists.map((list) => (
            <tr key={list.id} className="flex">
              <th className="border-2 p-4">
                <a href={list.id}>{list.name}</a>
                <span className="bg-lime-500 px-2 rounded-l-full">
                  {list.tasks.length}
                </span>
              </th>
              <th>
                <Button>
                  <Link href={`/category/create`}>
                    <PlusIcon className="w-6" />
                  </Link>
                </Button>
              </th>
            </tr>
          ))}
        </thead>
        <tbody>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Button>
                  <Link href={`/task/create`}>
                    <PlusIcon className="w-6" />
                  </Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link href={`/task/${tasks.id}/edit/`}>
                    <PencilSquareIcon className="w-6" />
                  </Link>
                </Button>
              </li>
              <li>
                <Button onClick={handleClickDeleteList}>
                  <TrashIcon className="w-6" />
                </Button>
              </li>
              <li>
                <Button onClick={handleToggle}>
                  <CheckCircleIcon className="w-6" />
                </Button>
              </li>
            </ul>
          </nav>
          {lists.map((list) => (
            <>
              {list.tasks.map((el) => (
                <tr key={list.tasks.id}>
                  <td className="border px-4 py-2">
                    {list.tasks.name !== "" ? (
                      <></>
                    ) : (
                      <input
                        type="checkbox"
                        defaultChecked={list.tasks.selected}
                      ></input>
                    )}
                    <Link href={`/task/${list.tasks.id}/edit/`}>{el.name}</Link>
                    <Button onClick={handleClickDeleteTask}>
                      <TrashIcon
                        className="invisible group-hover:visible w-6 ml-auto cursor-pointer duration-75"
                        data-task-id={list.tasks.id}
                      />
                    </Button>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default IndexPage
