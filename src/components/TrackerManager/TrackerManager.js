import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components/native'
import { Text, Button, View } from 'react-native'
import IconDisplay from '../IconDisplay/IconDisplay'
import { iconStringToArray } from '../../lib/utils'
import { ADD_OPTIONS } from '../EmptyTracker/AddOptionsMenu'
import CreateTrackerForm from './CreateTrackerForm'
import SelectTrackerList from './SelectTrackerList'

const StyledOverlay = styled.View`
	height: 100%;
	width: 100%;
	background: grey;
	display: ${({ $visible }) => $visible ? 'flex' : 'none'};
	justify-content: space-between;
	align-items: stretch;
	position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const StyledIconContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: auto;
`

const StyledAddButton = styled.Button`
	background-color: blue;
	color: white;
`

// Handles selecting or creating trackers
const TrackerManager = ({
	option = null,
	onClose
}) => {
	const isVisible = useMemo(() => option != null, [option])

	const OptionComponentMap = {
		[ADD_OPTIONS.CREATE]: CreateTrackerForm,
		[ADD_OPTIONS.SELECT]: SelectTrackerList,
	}
	const OptionComponent = useMemo(() => {
		return OptionComponentMap[option]
	}, [option])

	const onSubmit = useCallback((data) => {
		console.log('submitting', option, data)
		onClose()
	}, [option])

	useEffect(() => {
		const handleEscape = e => {
			if (e.code === 'Escape') {
				onClose()
			}
		}
		
		window.addEventListener('keydown', handleEscape)

		return () => {
			window.removeEventListener('keydown', handleEscape)
		}
	}, [])
	
	return (
		<StyledOverlay
			$visible={isVisible}
			as={OptionComponent}
			handleSubmit={onSubmit}
			handleClose={onClose}
		/>
	)
}

export default TrackerManager