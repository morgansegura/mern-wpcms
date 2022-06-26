import React, { MouseEvent } from 'react'
import { StyledRipple } from 'core/styles/utils/Ripple'

interface RippleEffectProps {
	children?: ReactChild | ReactChild[]
	as?: any
	color?: any
	onClick?: (e: MouseEvent<HTMLButtonElement>) => unknown
}

const RippleEffect: FC<RippleEffectProps> = ({ as = 'div', children, color, onClick }) => {
	const [coords, setCoords] = useState({ x: -1, y: -1 })
	const [isRippling, setIsRippling] = useState(false)

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true)
			setTimeout(() => setIsRippling(false), 300)
		} else setIsRippling(false)
	}, [coords])

	useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 })
	}, [isRippling])

	return (
		<StyledRipple
			className="RippleContainer-root"
			color={color}
			onClick={(e: any) => {
				const rect = e.target.getBoundingClientRect()
				setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
				onClick && onClick(e)
			}}
		>
			{isRippling ? (
				<span
					className="RippleEffect-root"
					style={{
						left: coords.x,
						top: coords.y,
					}}
				/>
			) : (
				``
			)}
			<div className="RippleContent-root">{children}</div>
		</StyledRipple>
	)
}

export default RippleEffect
