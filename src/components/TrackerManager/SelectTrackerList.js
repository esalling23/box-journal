import React, { useMemo, useState, useEffect, useCallback } from 'react'
import { Text, ScrollView, Button } from 'react-native'
import { createTracker, getUserTrackers } from '../../lib/api'
import styled from 'styled-components/native'
import { pullTemplateData } from '../../lib/utils'

const StyledContainer = styled.View`
	position: absolute;
	background: purple;
	height: 100%;
	width: 100%;
`

const selectedEntryStyles = `
	border: 1px solid black;

`

const StyledEntry = styled.TouchableOpacity`
	${({ $isSelected }) => $isSelected ? selectedEntryStyles : 'border: 0px;'}
	border-radius: 5px;
`

const SelectTrackerList = ({
	handleSubmit,
	handleClose
}) => {
	const [selectedTracker, setSelectedTracker] = useState(null)
	const [entries, setEntries] = useState(null) 

	// const handleClose = () => {

	// }

	const handleConfirm = useCallback(() => {
		// close list
		// create new tracker for this box using the selected tracker as a template
		const trackerTemplate = entries.find(e => e._id === selectedTracker);
		console.log(trackerTemplate)
		createTracker(pullTemplateData(trackerTemplate))
			.then(handleSubmit)
			.catch(console.error)
	}, [entries, selectedTracker])

	const handleSelect = (id) => {
		setSelectedTracker(id)
	}

	const loadEntries = async () => {
		try {
			const res = await getUserTrackers()
			console.log(res.data.trackers)
			setEntries(res.data.trackers)
		} catch (err) {
			console.warn(err)
		}
	}

	useEffect(() => {
		loadEntries()
	}, [])

	const entryList = useMemo(() => {
		return entries?.map(data => {
			const onClick = () => handleSelect(data._id)
			return <StyledEntry
				onPress={onClick}
				onTouchStart={onClick}
				$isSelected={selectedTracker === data._id}
			><Text>{data.name} ({data.type})</Text></StyledEntry>
		})
	}, [entries, selectedTracker, handleSelect])

	return (
		<StyledContainer>
			<Button title="Exit" type="button" onPress={handleClose} />
			<ScrollView>
				{entryList}
			</ScrollView>
			<Button title="Confirm" type="submit" onPress={handleConfirm} />
		</StyledContainer>
	)
}

export default SelectTrackerList