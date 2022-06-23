import React from 'react'
import { Toaster } from 'react-hot-toast'
import { AppProps } from 'next/app'
import { AppProvider, AuthProvider } from '@components/providers'

export default function App({ Component, pageProps, ...delegated }: AppProps) {
	const [hasMounted, setHasMounted] = React.useState(false)

	React.useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null
	return (
		<div {...delegated}>
			<AppProvider>
				<AuthProvider>
					<Component {...pageProps} />
				</AuthProvider>
			</AppProvider>
			<Toaster />
		</div>
	)
}
