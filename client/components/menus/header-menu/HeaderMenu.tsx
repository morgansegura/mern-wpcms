import { FC, useContext } from 'react'
import { useAuth } from 'hooks'
import Link from 'next/link'

// [Core]
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

// [Core]
import { DrawerTrigger } from '@core/navigation/drawer'
import { Menu, MenuItem } from '@core/navigation/menu'
import Avatar from '@core/data-display/avatar/Avatar'
// [Components]
import { IconDashboard, IconHamburger, IconSignout, IconChevronDown } from '@components/icons'
import { AuthContext, ToggleColorMode } from '@components/providers'
// [Interfaces]
import { IHeaderMenu } from './HeaderMenu.interfaces'

// [Styles]
import * as s from './HeaderMenu.styled'

const HeaderMenu: FC<IHeaderMenu> = () => {
	const { signout } = useAuth()
	const { hasAuth, getUserRole, roleBasedPath } = useAuth()
	const [auth, setAuth] = useContext(AuthContext)

	const unauthItems = [
		{
			label: (
				<MenuItem>
					<Link href="/signin">
						<a>Signin</a>
					</Link>
				</MenuItem>
			),
			key: 'signin',
		},
		{
			label: (
				<MenuItem>
					<Link href="/signup">
						<a>Signup</a>
					</Link>
				</MenuItem>
			),
			key: 'signup',
		},
		{
			label: (
				<MenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</MenuItem>
			),
			key: 'open-drawer',
		},
	]

	const authItems = [
		{
			label: (
				<MenuItem>
					<Link href={roleBasedPath()}>
						<a>
							<IconDashboard /> {auth?.user?.username || `Dashboard`}
						</a>
					</Link>
				</MenuItem>
			),
			key: 'dashboard',
		},
		{
			label: (
				<MenuItem>
					<Link href="/">
						<a onClick={() => signout()}>
							<IconSignout />
							Signout
						</a>
					</Link>
				</MenuItem>
			),
			key: 'signout',
		},
		{
			label: (
				<MenuItem>
					<s.HeaderSVG>
						<ToggleColorMode theme="light" />
					</s.HeaderSVG>
				</MenuItem>
			),
			key: 'open-drawer',
		},
		{
			label: (
				<MenuItem>
					<Avatar>
						<DrawerTrigger>
							<IconHamburger />
						</DrawerTrigger>
					</Avatar>
				</MenuItem>
			),
			key: 'toggle-color',
		},
	]

	return (
		<s.HeaderMenu>
			<Accordion>
				<AccordionSummary
					expandIcon={<IconChevronDown />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Accordion 1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Menu items={hasAuth ? authItems : unauthItems} />
		</s.HeaderMenu>
	)
}

export default HeaderMenu
