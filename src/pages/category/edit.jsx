import { useContext } from "@/components/ContextProvider.jsx"
import Page from "@/components/Page.jsx"
import ListForm from "@/components/ListForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      userId: Number.parseInt(params.userId, 10),
    },
  },
})

const UserEditPage = (props) => {
  const {
    params: { userId },
  } = props
  const { updateUser, users } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateUser(values)
      router.push("/")
    },
    [router, updateUser]
  )

  return (
    <Page>
      <ListForm
        onSubmit={handleSubmit}
        initialValues={users.find(({ id }) => id === userId)}
      />
    </Page>
  )
}

export default UserEditPage
