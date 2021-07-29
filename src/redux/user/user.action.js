export const setAPIKey = key => {
  const modifiedKey = key.replace(/^"(.*)"$/, '$1')
  return {
    type: 'SET_USER_API_KEY',
    payload: {
      api: modifiedKey
    }
  }
}