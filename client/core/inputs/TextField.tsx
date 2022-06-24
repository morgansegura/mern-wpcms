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
} from 'core/styles/inputs'

const TextField: React.FC<TextFieldProps> = ({
	label,
	register,
	required = false,
	watch,
	errors,
	error,
	name,
	placeholder,
	type,
}) => {
	const inputRef = React.useRef<HTMLDivElement>(null)
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
			setBlur(true)
		}
	})

	const keyPressBlur = () => {
		if (watch(`${name}`).length === 0) {
			setFocus(false)
			setBlur(true)
		}
	}

	React.useEffect(() => {
		const close = (e: any) => {
			if (e.keyCode === 27 || e.keyCode === 9) {
				keyPressBlur()
				error = false
			}
		}
		window.addEventListener('keydown', close)
		return () => window.removeEventListener('keydown', close)
	}, [watch])

	return (
		<>
			<StyledTextFieldControl>
				<StyledTextField ref={inputRef} focus={focus} blur={blur} error={error}>
					{label && <StyledLabel>{label}</StyledLabel>}
					{placeholder && <StyledPlaceholder>{placeholder}</StyledPlaceholder>}
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
		</>
	)
}

export default TextField
