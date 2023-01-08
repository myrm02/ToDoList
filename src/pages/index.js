import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import {
  TrashIcon,
  PencilSquareIcon,
  PlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid"
// import { useCallback } from "react"
import Head from "next/head.js"
import Link from "next/link"

const IndexPage = () => {
  const { lists, tasks } = useContext()

  // const handleClickDelete = useCallback(
  //   (event) => {
  //     const userId = Number.parseInt(
  //       event.currentTarget.getAttribute("data-user-id"),
  //       10
  //     )

  //     deleteUser(userId)
  //   },
  //   [deleteUser]
  // )

  return (
    <main className="flex flex-col">
      <Head>
        <title>ToDo List</title>
      </Head>
      <table className="w-full mt-8">
        <thead>
          {lists.map((list) => (
            <tr key={list.id} className="flex">
              <th className="border-2 p-4">{list.name}</th>
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
                <Button>
                  <TrashIcon className="w-6" />
                </Button>
              </li>
              <li>
                <Button>
                  <CheckCircleIcon className="w-6" />
                </Button>
              </li>
            </ul>
          </nav>
          {/* {lists.map((list) => (
            <tr key={list.id}>
              <td className=" flex border px-4 py-2">
                <input type="color"></input>
                {list.tasks.map((task) => task.name)}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </main>
  )
}

export default IndexPage
