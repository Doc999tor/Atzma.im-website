import { default as mainRequestService } from 'project-components/request.service.js'

export const postService = (url, body) => {
  const options = {
    method: 'POST',
    body
  }
  return mainRequestService(url, options)
}
