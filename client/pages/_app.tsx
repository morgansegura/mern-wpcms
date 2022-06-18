import React from 'react'
import { AppProps } from 'next/app'
import { AppProvider } from '@components/providers'

export default function App({ Component, pageProps, ...delegated }: AppProps) {
	const [hasMounted, setHasMounted] = React.useState(false)

	React.useEffect(() => {
		setHasMounted(true)
	}, [])

	if (!hasMounted) return null
	return (
		<div {...delegated}>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</div>
	)
}
