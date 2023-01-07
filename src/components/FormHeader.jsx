// import Link from "@/components/Link"
// import classNames from "classnames"
import Head from "next/head.js"
// import { useRouter } from "next/router.js"
import { XMarkIcon } from "@heroicons/react/24/solid"
import Button from "@/components/Button.jsx"

const FormHeader = (props) => {
  const { title, children } = props

  return (
    <main className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex p-4 justify-between items-center border-b">
        <h1 className="text-2xl font-bold italic">{title}</h1>
        <Button>
          <XMarkIcon className="w-6" />
        </Button>
      </header>
      <section>{children}</section>
    </main>
  )
}

export default FormHeader
