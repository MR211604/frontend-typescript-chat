const authURL = process.env.REACT_APP_SERVER_API

export const fetchWithoutToken = async (endpoint: string, data: any, method: string) => {

  const url = `${authURL}/${endpoint}`

  if (method === 'GET') {
    const response = await fetch(url)
    return await response.json()
  } else {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  }

}


export const fetchWithToken = async (endpoint: string, data?: any, method: string = 'GET') => {

  const url = `${authURL}/${endpoint}`

  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    console.log('token', token)
    const response = await fetch(url, {
      headers: {
        'x-token': token
      }
    })
    return await response.json()
  } else {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  }

} 