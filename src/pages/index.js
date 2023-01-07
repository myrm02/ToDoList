import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import Link from "@/components/Link.jsx"
import {
  TrashIcon,
  PencilSquareIcon,
  PlusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid"
// import { useCallback } from "react"
import Head from "next/head.js"

const IndexPage = () => {
  const edit = (
    <>
      <Link href={`/users/edit/`}>Edit</Link>
    </>
  )
  const { users } = useContext()
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
          <tr>
            <th className="border-2 p-4">Nom catégorie</th>
          </tr>
        </thead>
        <tbody>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Button>
                  <PlusIcon className="w-6" />
                </Button>
              </li>
              <li>
                <Button onClick={edit}>
                  <PencilSquareIcon className="w-6" />
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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">
                <div>
                  <input type="color"></input>
                </div>
                {user.username}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default IndexPage
