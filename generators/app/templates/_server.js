import React from 'react'
import ReactDOM from 'react-dom'
import Component from '../../<%=name%>'
import basicData from '../data/base'
import '../../<%=name%>-client'

(function runImmediately() {
  const component = React.createFactory(Component)
  const app = document.createElement('div')
  document.body.appendChild(app)

  ReactDOM.render(component({
    data: basicData
  }), app)
}())
