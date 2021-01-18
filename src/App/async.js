const getData = async () => {
	const response = await fetch('https://viacep.com.br/ws/01001000/json/', {
		method: 'GET'
	})
	return response.json()
}