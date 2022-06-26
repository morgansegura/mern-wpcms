import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { AppProps } from 'next/app'
import { AppProvider } from '@components/providers'

export default function App({ Component, pageProps, ...delegated }: AppProps) {
	const [hasMounted, setHasMounted] = useState(false)

	useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null
	return (
		<div {...delegated}>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
			<Toaster />
		</div>
	)
}
