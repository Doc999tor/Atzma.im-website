import mainRequestService from './request.service'

export const postService = body => {
  const url = config.urls.main + config.urls.media_url.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return mainRequestService(url, options).then(r => r.json().then(data => ({
    status: r.status,
    data
  })))
}
// Not actual link
export const replaceService = (body, id) => {
  const url = config.urls.main + config.urls.media_del
    .replace('{client_id}', config.data.id)
    .replace('{media_id}', id)
  const options = {
    mode: 'cors',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  }
  return mainRequestService(url, options)
}

export const deleteService = id => {
  const url = config.urls.main + config.urls.media_del.replace('{client_id}', config.data.id).replace('{media_id}', id)
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}

export const multiDeleteService = ids => {
  const url = config.urls.main + config.urls.multi_del_url
    .replace('{media_ids}', ids.join())
    .replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    method: 'DELETE'
    // body
  }
  return mainRequestService(url, options)
}
