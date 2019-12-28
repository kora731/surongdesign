import React from "react"

interface Props {
  location: string
  title: string
}

class Layout extends React.Component<Props> {
  public render() {
    const { location, title, children } = this.props

    return (
      <div className="sr-page sr-page--dark  sr-page--fullScreen">
        {children}
      </div>
    )
  }
}

export default Layout
