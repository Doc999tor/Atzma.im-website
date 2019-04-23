import mainRequestService from './request.service'

export const replaceService = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body
  }
  return mainRequestService(url, options)
}
export const putService = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    body
  }
  return mainRequestService(url, options)
}
export const StatusPutService = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id) + config.urls.user_status_url
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    body
  }
  return mainRequestService(url, options)
}
export const newGetService = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
    body
  }
  return mainRequestService(url, options).then(r => r.json().then(r => ({ r })))
}
export const getService = q => {
  const url = config.urls.main + config.urls.add_client_url.replace('{query}', q)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const deleteService = q => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', q)
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}

export const postServiceTest = body => {
  const url = config.urls.main + config.urls.clients.replace('{client_id}', config.data.id) + '/profile_image'
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}
// .then(res => res.json().then(data => ({ data, res })))