import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import toast from 'react-hot-toast'

// [API]
import { pathConfig as path } from 'api'
// [Components]
import { AuthContext } from '@components/providers'
// [Hooks]
import { useSignout, useStorage } from 'hooks'
// [Config]
import { SignOutProps } from '@config/interfaces'

import { HeaderMenuItem } from '@styles/components/layouts'

const SignOut: React.FC<SignOutProps> = () => {
	const router = useRouter()
	const { signout } = useSignout()

	const [loggedIn, setLoggedIn] = React.useState(false)
	const [loding, setLoading] = React.useState(false)

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

	React.useEffect(() => {
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
