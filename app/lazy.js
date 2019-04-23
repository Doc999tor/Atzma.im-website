export default getComponent => {
  class AsyncComponent extends React.Component {
      static Component = null
      state = { Component: AsyncComponent.Component }
      componentWillMount () {
        if (!this.state.Component) {
          getComponent().then(Component => {
            AsyncComponent.Component = Component
            this.setState({ Component })
          })
        }
      }
      render () {
        const { Component } = this.state
        return Component ? <Component {...this.props} /> : null
      }
  }
  return AsyncComponent
}
