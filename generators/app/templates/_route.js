import Relay from 'react-relay'

export default class <%=className%>Route extends Relay.Route {
  static queries = {

    data: (Component) => Relay.QL`
      query {
        }
      }
    `
  }
  static routeName = '<%=className%>Route'
}
