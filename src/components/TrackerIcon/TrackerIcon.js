import React, { useCallback } from 'react'
import styled from 'styled-components/native'

const StyledIcon = styled.View`
	height: 30px;
	width: 30px;

	${({ $isSelected }) => $isSelected ? `
		border: 1px solid black;
	` : ''}
`

const TrackerIcon = ({
	icon,
	isSelected,
	handleSelect: handleSelectIcon
}) => {
	// console.log(icon)
	const handleSelect = useCallback((e) => {
		handleSelectIcon(icon)
	}, [handleSelectIcon])

	return (
		<StyledIcon 
			$isSelected={isSelected} 
			onClick={handleSelect}
			onTouchStart={handleSelect}
		>
			{icon}
		</StyledIcon>
	)
}

export default TrackerIcon