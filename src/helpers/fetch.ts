const baseURL = process.env.REACT_APP_SERVER_API

export const fetchWithoutToken = async (endpoint: string, data: any, method: string) => {
  
  const url = `${baseURL}/${endpoint}`

  if(method === 'GET') {
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