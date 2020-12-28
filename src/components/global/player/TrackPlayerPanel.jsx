import React from 'react'
import { Button } from 'semantic-ui-react'
import TimeBarContext from './panel/TimeBarContext'
import getData from './functions/getData'
import formatSeconds from 'global/functions/formatSeconds'

export default class TrackPlayerPanel extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { isLoading: false, isError: false }

    this.getData = getData.bind(this)
  }

  componentDidMount = () => (this._isMounted = true)

  componentWillUnmount = () => (this._isMounted = false)

  render () {
    const { isLoading, isError } = this.state
    const { isPlaying, toggleAudio, audioStatus } = this.props
    const { length } = this.props.track

    const playButtonIcon = () => {
      const paused = audioStatus === 'pause'

      if (isPlaying) {
        return paused ? 'play' : 'pause'
      } else {
        return isError ? 'times' : 'play'
      }
    }

    const handleTrackClick = () =>
      !isLoading && (isPlaying ? toggleAudio() : this.getData())

    const isDisabled = isLoading || isError

    const playButtonData = (
      <Button
        basic
        size="large"
        className="trackPagePlayerPlayButton"
        icon={playButtonIcon()}
        onClick={handleTrackClick}
        loading={isLoading}
        disabled={isDisabled}
      />
    )

    const placeholderData = (
      <div className="trackPagePlayerPlaceholder" onClick={handleTrackClick}>
        Click to play
      </div>
    )

    const timeBarData = (
      <div className="trackPagePlayerTimeBar">
        <TimeBarContext />
      </div>
    )

    const timeBarPlaceholderData = isPlaying ? timeBarData : placeholderData

    const lengthData = length > 0 && (
      <div className="trackPagePlayerLength">{formatSeconds(length)}</div>
    )

    return (
      <div className="trackPagePlayer">
        {playButtonData}
        {timeBarPlaceholderData}
        {lengthData}
      </div>
    )
  }
}