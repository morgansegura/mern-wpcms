import { FC } from 'react'
import Head from 'next/Head'
import { siteMetadata as meta } from 'helpers'
// [Interfaces]
import { IHeaderContent } from './HeaderContent.interfaces'
// [Styles]
import * as s from './HeaderContent.styled'

const HeaderContent: FC<IHeaderContent> = ({
	title,
	description,
	children,
	canonicalUrl,
	ogTwitterImage,
	ogType,
	ogImageUrl,
}) => {
	return (
		<s.HeaderContent>
			<>
				<Head>
					<meta charSet="utf-8" />
					<title>
						{title} » {meta.companyName}
					</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content={description} />
					{/* twitter metadata */}
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content={meta.twitterHandle} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					{ogTwitterImage && <meta name="twitter:image" content={ogTwitterImage} />}
					{/* canonical link */}
					<link rel="canonical" href={canonicalUrl} />
					{/* open graph metadata */}
					<meta property="og:locale" content="en_US" />
					<meta property="og:site_name" content={meta.companyName} />
					<meta property="og:type" content={ogType} />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					{ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
					<meta property="og:url" content={canonicalUrl} />
					{/* Theming */}
					<meta name="msapplication-TileColor" content="#00df94" />
					<meta name="theme-color" content="#00df94" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					{/* Favicon */}
					<link rel="icon" href="/favicon.ico" />
					{/* Icons */}
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#0041df" />

					{children}
				</Head>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href={`https://fonts.googleapis.com/css2?${meta.googleFonts}&display=swap`}
					rel="stylesheet"
				></link>
			</>
		</s.HeaderContent>
	)
}

export default HeaderContent
