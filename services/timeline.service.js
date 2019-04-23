import mainRequestService from './request.service'
export default (urlParams, d) => {
  return new Promise(resolve => {
    // if (r.status !== 200) return reject([])
    const promises = urlParams.map(field_name => {
      return mainRequestService(
        config.urls.main + config.urls.timeline_events
          .replace('{event}', field_name)
          .replace('{ds}', d.start)
          .replace('{de}', d.end),
        {mode: 'cors', method: 'GET'}
      ).then(r => r.ok
        ? r.json().then(items => ({items, field_name}))
        : ({items: [], field_name})
      )
    })
    Promise.all(promises).then(res => {
      const allObj = {}
      res.forEach(i => {
        allObj[i.field_name] = i.items.map(item => ({
          ...item, field_name: i.field_name
        }))
      })
      resolve(allObj)
    })
  })
}
