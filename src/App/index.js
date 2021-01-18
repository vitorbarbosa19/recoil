import React from 'react'
import {useRecoilState, useRecoilValue} from 'recoil'
import {filterBooleanValue, filterStringValue} from './atoms'
import teamQuery from './teamQuery'

const FilterTeam = () => {
	const [filter, setFilter] = useRecoilState(filterBooleanValue)
	const updateFilter = event => setFilter(event.target.checked)
	return (
		<>
			<input type='checkbox' onChange={updateFilter} id='active/inactive' checked={filter} />
			<label htmlFor='active/inactive'>Incluir inativos</label>
		</>
	)
}

const DisplayTeam = () => {
	/* subscribe to the filter atom */
	const filter = useRecoilValue(filterStringValue)
	/* subscribe to the team collection */
	const firestoreData = teamQuery(filter)
	console.log(firestoreData)
	const { data: team } = firestoreData
	if (!team) return 'Carregando...'
	return team.map(teamMember =>
		<div key={teamMember.uid}>
			{teamMember.nome}
		</div>
	)
}

//pagination
//error handling (error boundary)
//loading handling (skeleton) (without Suspense)
//Ziro theme
//dynamic imports

const App = () =>
	<>
		<FilterTeam />
		<br/>
		<br/>
		<br/>
		<DisplayTeam />
	</>

export default App