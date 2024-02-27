import React, { useCallback, useMemo } from 'react'
import { Button, Pressable } from 'react-native'
import styled from 'styled-components/native'

const StyledIcon = styled.Text`
	height: 30px;
	width: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledPressableIcon = styled.Pressable`
	${({ $isSelected }) => {
		return $isSelected ? `background-color: black;` : ''
	}}
`

const TrackerIcon = ({
	icon,
	isSelected,
	isInteractive,
	handleSelect: handleSelectIcon
}) => {
	const handleSelect = useCallback((e) => {
		console.log(icon)
		handleSelectIcon(icon)
	}, [handleSelectIcon, icon])

	const Icon = <StyledIcon>{icon}</StyledIcon>

	if (isInteractive) {
		return (
		<StyledPressableIcon 
			$isSelected={isSelected} 
			onPress={handleSelect}
		>{Icon}</StyledPressableIcon>
		)
	}

	return Icon
}

export default TrackerIcon