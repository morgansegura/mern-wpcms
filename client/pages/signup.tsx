import React from 'react'
import { SignupPageProps } from '@config/interfaces'
import Link from 'next/link'

const Signin: React.FC<SignupPageProps> = () => {
	return (
		<div>
			<h1>Signup Page</h1>
			<div>
				<input type="text" name="firstName" placeholder="First Name" />
				<input type="text" name="lastName" placeholder="Last Name" />
				<input type="email" name="email" placeholder="Email" />
				<input type="password" name="password" placeholder="Password" />
				<input type="password" name="password-confirm" placeholder="Confirm Password" />
				<button>Signup</button>
				<p>
					Or{' '}
					<Link href="/signin">
						<a>Signin </a>
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Signin
