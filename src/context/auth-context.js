import { createContext } from 'react'

const authContetx = createContext({
	isAuthenticated: false,
	login: () => { },
})

export default authContetx