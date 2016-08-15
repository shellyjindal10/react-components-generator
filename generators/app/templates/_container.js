import Relay from 'react-relay'
import <%=className%> from './<%=name%>'

export default Relay.createContainer(<%=className%>, {
  fragments: {
    data: () => Relay.QL`
      fragment on PDP {
        
      }
    `
  }
})
