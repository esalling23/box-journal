import axios from 'axios'

const apiUrl = 'http://localhost:8080'

export const getTodayBox = () => axios({
	url: `${apiUrl}/boxes-history/today`
})

export const getUserTrackers = () => axios({
	url: `${apiUrl}/trackers`
})

export const createTracker = (tracker) => axios({
	url: `${apiUrl}/trackers`,
	method: 'post',
	data: { tracker }
})