import React from 'react'
import { Helmet } from 'react-helmet'
import PlayerContext from 'contexts/PlayerContext'

export default class Title extends React.PureComponent {
  render () {
    return (
      <PlayerContext.Consumer>
        {context => {
          const { audioStatus, currentTrack } = context

          const titleData = () => {
            if (audioStatus === 'play') {
              const { artist, title } = currentTrack

              return `${artist} - ${title} | muffon`
            } else {
              return 'muffon'
            }
          }

          return (
            <Helmet>
              <title>{titleData()}</title>
            </Helmet>
          )
        }}
      </PlayerContext.Consumer>
    )
  }
}