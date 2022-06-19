import React from 'react'
import { SigninPageProps } from '@config/interfaces'
import Link from 'next/link'

const Signin: React.FC<SigninPageProps> = () => {
	return (
		<div>
			<h1>Signin Page</h1>
			<div>
				<input type="email" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />

				<Link href="/">
					<a>Forgot Password</a>
				</Link>
				<button>Signin</button>
				<p>
					Or{' '}
					<Link href="/signup">
						<a>Signup Now! </a>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Signin
