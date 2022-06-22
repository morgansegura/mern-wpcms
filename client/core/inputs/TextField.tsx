import React from 'react'
import { useClickAway } from 'react-use'
import { TextFieldProps } from 'core/config/interfaces'

// [Styled]
import {
	StyledTextField,
	StyledTextFieldControl,
	StyledLabel,
	StyledPlaceholder,
	StyledInput,
} from 'core/styles'

const TextField: React.FC<TextFieldProps> = ({
	label,
	register,
	required = false,
	watch,
	errors,
	name,
	placeholder,
	size = 'md',
	type,
}) => {
	const inputRef = React.useRef(null)
	const [focus, setFocus] = React.useState(false)
	const [blur, setBlur] = React.useState(true)

	const onFocus = () => {
		setFocus(true)
		setBlur(false)
	}

	const onBlur = () => {
		setFocus(false)
		setBlur(true)
	}

	useClickAway(inputRef, () => {
		if (watch(`${name}`).length === 0) {
			setFocus(false)
			setBlur(false)
		}
	})

	const keyPressBlur = () => {
		if (watch(`${name}`).length === 0) {
			setFocus(false)
			setBlur(false)
		}
	}

	React.useEffect(() => {
		const close = (e: any) => {
			if (e.keyCode === 27) {
				keyPressBlur()
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [watch])

	return (
		<StyledTextFieldControl>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextField ref={inputRef} size={size} focus={focus} blur={blur}>
				<StyledPlaceholder>{placeholder}</StyledPlaceholder>
				<StyledInput
					name={name}
					onFocus={onFocus}
					onBlur={onBlur}
					type={type}
					errors={errors}
					{...register(name, { required })}
				/>
			</StyledTextField>
		</StyledTextFieldControl>
	)
}

export default TextField
