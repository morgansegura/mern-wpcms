import { FC, useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
// [Interfaces]
import { ITextField } from './TextField.interfaces'
// [Styled]
import * as s from './TextField.styled'

const TextField: FC<ITextField> = ({
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
	const inputRef = useRef<HTMLDivElement>(null)
	const [focus, setFocus] = useState(false)
	const [blur, setBlur] = useState(true)

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

	useEffect(() => {
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
			<s.TextFieldControl>
				<s.TextField ref={inputRef} focus={focus} blur={blur} error={error}>
					{label && focus && <s.Label>{label}</s.Label>}
					{placeholder && <s.Placeholder>{placeholder}</s.Placeholder>}
					<s.Input
						name={name}
						onFocus={onFocus}
						onBlur={onBlur}
						type={type}
						errors={errors}
						{...register(name, { required })}
					/>
				</s.TextField>
			</s.TextFieldControl>
		</>
	)
}

export default TextField
