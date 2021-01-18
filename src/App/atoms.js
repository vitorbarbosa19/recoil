import {atom, selector} from 'recoil'

const filterBooleanValue = atom({
	key: 'filterBooleanValue',
	default: true
})

const filterStringValue = selector({
	key: 'filterStringValue',
	get: ({get}) => get(filterBooleanValue) ? 'includeInactives' : 'excludeInactives'
})

export {filterBooleanValue, filterStringValue}