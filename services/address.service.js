import mainRequestService from './request.service'
import { join } from 'path';

export const getService = q => {
  const url = config.urls.new_address.replace('{query}', q).replace('{language}', config.translations.language)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const NewGetService = () => {
  const url = config.urls.new_test_address
  const options = {
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => ({ r })))
}
