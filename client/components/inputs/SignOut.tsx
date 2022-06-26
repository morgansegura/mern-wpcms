import { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast from 'react-hot-toast'

// [API]
import { pathConfig as path } from 'api'
// [Hooks]
import { useAuth } from 'hooks'
// [Config]
import { SignOutProps } from '@config/interfaces/FormProps'
// [Components]
import { HeaderMenuItem } from '@styles/components/layouts'

const SignOut: FC<SignOutProps> = () => {
	const router = useRouter()
	const { signout } = useAuth()

	const [loggedIn, setLoggedIn] = useState(false)
	const [loding, setLoading] = useState(false)

	const onSubmit = async () => {
		try {
			setLoggedIn(false)
			signout()
			toast.success(`Successfully signed out.`)
			setLoading(true)
		} catch (err) {
			toast.error(`Error ${err}`)
		}
		setLoading(false)
	}

	useEffect(() => {
		if (loggedIn) {
			router.push(`${path.base.landing.href}`)
		}
	}, [loggedIn, onSubmit])

	return (
		<>
			<HeaderMenuItem>
				<Link href="/">
					<a onClick={onSubmit}>Signout</a>
				</Link>
			</HeaderMenuItem>
		</>
	)
}

export default SignOut
