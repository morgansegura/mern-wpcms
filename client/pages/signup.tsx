import { FC } from 'react'
import { DefaultLayout } from '@components/layouts'
import { SignupForm } from '@components/layouts'

const SignupPage: FC = () => {
	return (
		<DefaultLayout>
			<SignupForm title="Signup" copy="Become a proud FEWCrew&trade; Member." />
		</DefaultLayout>
	)
}

export default SignupPage
