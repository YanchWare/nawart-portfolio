import rest from 'rest'
import mime from 'rest/interceptor/mime'

let client = rest.wrap(mime)

export default class APIWrapper {

  static get filterEndpoint () {
    return 'http://nawartpress.com/wp-json/wp/v2/categories?page='
  }

  static get articleEndpoint () {
    return 'http://nawartpress.com/wp-json/wp/v2/posts?per_page=100&page='
  }

  static get mediaEndpoint () {
    return 'http://nawartpress.com/wp-json/wp/v2/media/'
  }

  static getMedia (mediaId) {
    return client({
      path: APIWrapper.mediaEndpoint + mediaId,
      method: 'GET'
    })
  }

  static getFilters (page) {
    return client({
      path: APIWrapper.filterEndpoint + page,
      method: 'GET'
    })
  }

  static getArticles (page) {
    return client({
      path: APIWrapper.articleEndpoint + page,
      method: 'GET'
    })
  }

}
