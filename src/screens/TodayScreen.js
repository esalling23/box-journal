import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import Box from '../components/Box/Box'
import StretchContainer from '../components/Styled/StretchContainer'
import { getTodayBox } from '../lib/api'

const TodayScreen = () => {
	const [box, setBox] = useState(null)

	useEffect(() => {
		getTodayBox()
			.then(res => {
				console.log(res)
				setBox(res.data)
			})
			.catch(err => console.log(err))
	}, [])


	return <StretchContainer>
		<Box box={box} />
	</StretchContainer>
}

export default TodayScreen