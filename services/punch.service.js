import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.punch_cards_req.replace('{client_id}', config.data.id)

export const getPunchCards = () => {
  const url = config.urls.main + config.urls.get_punch_cards_list.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return new Promise((resolve, reject) => {
    mainRequestService(url, options).then(r => {
      if (r.status !== 200) {
        // Handle error
        return reject([])
      }
      r.json().then((r = []) => {
        r.forEach(i => {
          if (i && i.uses && i.uses.length < i.service_count) {
            i.isActive = (i.expiration && moment(i.expiration) > moment()) || !i.expiration
          }
        })
        resolve(r)
      })
    })
  })
}

export const getService = () => {
  const url = config.urls.main + config.urls.punch_cards_get
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export const postServiceUse = (id, body) => {
  const url = mainUrl + '/' + id + '/use'
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}

export const postService = body => {
  const url = mainUrl
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}

export const deleteService = id => {
  const url = mainUrl + '/' + id
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}

export const deleteServiceUse = (client_id, card_id, use_id) => {
  const url = config.urls.main +
   config.urls.punch_card_del.replace('{client_id}', client_id).replace('{punch_card_id}', card_id).replace('{use_id}', use_id)
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return mainRequestService(url, options)
}
