import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

import Box from '../components/Box/Box'
import StretchContainer from '../components/Styled/StretchContainer'

const StyledScreen = styled(StretchContainer)`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
`

const HistoryScreen = () => {
	const [history, setHistory] = useState(null)

	const content = useMemo(() => {
		if (history === null) return 'Loading...'

		return history.map(box => <Box box={box} />)
	}, [history])

	return <StyledScreen>
		
	</StyledScreen>
}

export default TodayScreen