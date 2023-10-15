import { users } from "../../../tmp/users"

const userExists = (userName: string) => {
  return users.some((user) => user.userName === userName)
}

export const validateUser = (
  userName: string,
  password: string
) => {
  if (!userExists(userName)) return false
  if (!password) return false
  return users.some(
    (user) =>
      user.userName === userName &&
      user.password === password
  )
}
