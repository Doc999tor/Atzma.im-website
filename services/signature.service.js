import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.signature.replace('{client_id}', config.data.id)

export const replaceService = body => {
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return mainRequestService(mainUrl, options)
}

export const deleteService = () => {
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(mainUrl, options)
}
