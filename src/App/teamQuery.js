import {useFirestoreCollectionData, useFirestore} from 'reactfire'

const teamQuery = queryType => {
	const possibleQueries = {
		'includeInactives': useFirestore().collection('team').orderBy('nome'),
		'excludeInactives': useFirestore().collection('team').where('dataFim','==','-').orderBy('nome')
	}
	const teamQuery = possibleQueries[queryType]
	return useFirestoreCollectionData(teamQuery)
}

export default teamQuery