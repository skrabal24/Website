import { useEffect, useRef } from 'react'
import WaveformPlayer from '@arraypress/waveform-player'
import '@arraypress/waveform-player/dist/waveform-player.css'

export default function AudioPlayer({
  url,
  title = '',
  subtitle = '',
  waveformStyle = 'mirror',
  height = 60,
  barWidth = 2,
  barSpacing = 1,
  waveformColor,
  progressColor,
  buttonColor,
  showPlaybackSpeed = true,
  markers = [],
  onPlay,
  onPause,
  onTimeUpdate,
}) {
  const containerRef = useRef(null)
  const playerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const options = {
      url,
      title,
      subtitle,
      waveformStyle,
      height,
      barWidth,
      barSpacing,
      showPlaybackSpeed,
      markers,
      showBPM: true,
      enableMediaSession: true,
    }

    if (waveformColor) options.waveformColor = waveformColor
    if (progressColor) options.progressColor = progressColor
    if (buttonColor) options.buttonColor = buttonColor

    if (onPlay) options.onPlay = onPlay
    if (onPause) options.onPause = onPause
    if (onTimeUpdate) options.onTimeUpdate = onTimeUpdate

    playerRef.current = new WaveformPlayer(containerRef.current, options)

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="waveform-player-wrapper" />
}
