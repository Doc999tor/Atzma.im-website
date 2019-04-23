import mainRequestService from './request.service'

export const replaceService = () => {
  const url = config.urls.main + config.urls.fill + `?client_id=${config.data.id}`
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT'
  }
  return mainRequestService(url, options)
}
