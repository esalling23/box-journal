import React, { useState, useCallback } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import styled from 'styled-components/native'

import { createTracker } from '../../lib/api';

// to do - overlay on top of the selected box tracker location?
const StyledContainer = styled.View`
	position: absolute;
	background: purple;
	height: 100%;
	width: 100%;
`

const trackerTypes = [
	{ label: 'Tracker', value: 'Tracker' },
	{ label: 'Counter', value: 'Counter' },
	{ label: 'Memory', value: 'Memory' },
]

const defaultTrackerName = 'New Tracker Name'

const CreateTrackerView = ({
	handleSubmit,
	handleClose
}) => {

	const [typePickerOpen, setTypePickerOpen] = useState(false)

	const [trackerName, setTrackerName] = useState(defaultTrackerName)
	const [trackerType, setTrackerType] = useState(trackerTypes[0].value)

	const handleSubmitCreate = useCallback(() => {
		// handleSubmit(trackerName);
		console.log(trackerName, trackerType)
		createTracker({
			name: trackerName,
			type: trackerType
		})
		.then(handleSubmit)
		.catch(console.error)
	}, [trackerName]);

	return (
		<StyledContainer>
			<TextInput 
				onChangeText={newText => setTrackerName(newText)}
				defaultValue={defaultTrackerName}
				value={trackerName}
				label={<Text>Tracker name:</Text>}
			/>
			<Text>Tracker Type:</Text>
			<DropdownPicker 
				open={typePickerOpen}
				value={trackerType}
				items={trackerTypes}
				setOpen={setTypePickerOpen}
				setValue={setTrackerType}
			/>
			<Button title="Submit" onPress={handleSubmitCreate} />
			<Button title="Exit" onPress={handleClose} />
		</StyledContainer>
	)
}

export default CreateTrackerView