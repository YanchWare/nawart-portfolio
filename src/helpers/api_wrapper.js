import rest from 'rest'
import mime from 'rest/interceptor/mime'

let client = rest.wrap(mime)

export default class APIWrapper {

  static get filterEndpoint () {
    return 'http://nawartpress.com/wp-json/wp/v2/categories?page='
  }

  static getFilters (page) {
    return client({
      path: APIWrapper.filterEndpoint + page,
      method: 'GET'
    })
  }

}
