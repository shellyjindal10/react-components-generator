import <%=className%>Container from './<%=name%>-container'
import <%=className%>Route from './<%=name%>-route'

/**
 * Component to render the facet for component <%=className%>
 * @author: xyz@fanatics.com
 */

export default class RootProps {
  constructor (context) {
    let queryParams = {}
    this.Component = <%=className%>Container
    this.route = new <%=className%>Route(queryParams)
    this.queryParams = queryParams
  }
}
