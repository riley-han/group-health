import React from "react"
import { validateUser } from "../utils/validate-user"
import { useRouter } from "next/router"

const LoginForm = () => {
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const router = useRouter()
  const handleLogin = (
    userName: string,
    password: string
  ) => {
    try {
      const isUserValid = validateUser(userName, password)
      if (isUserValid) {
        router.push({ pathname: "/" }, undefined, {
          shallow: true,
        })
      } else {
        alert("Invalid username or password")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="sm:w-2/3 md:w-2/3 lg:w-1/3 w-3/4 h-[400px] border border-solid border-gray-200 rounded-xl mx-auto mt-20 p-4">
      <h1 className="text-2xl text-gray-900">Login</h1>
      <form
        className="flex flex-col gap-4 h-full"
        name="login"
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(userName, password)
        }}
      >
        <div className="flex flex-col text-left">
          <label htmlFor="userName">Email</label>
          <input
            className="border border-solid border-gray-700 rounded-sm p-1"
            type="text"
            id="userName"
            placeholder="Username..."
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div>
        <div className="flex flex-col text-left">
          <label htmlFor="password">Password</label>
          <input
            className="border border-solid border-gray-700 rounded-sm p-1"
            type="password"
            id="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div className="w-full justify-center mx-auto hover:bg-gray-200 rounded-xl">
          <button
            type="submit"
            className=" w-full rounded-xl border border-solid border-gray-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
