import React from 'react'
import { useSpring, animated } from 'react-spring'
function LoopTrue(width, height, bg) {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  })

  return (
    <animated.div
      style={{
        width: width,
        height: height,
        backgroundColor: bg,

        ...styles,
      }}
    />
  )
}
const Loader = (props) => {
  const { loading } = props
  return (
    <div>
      {loading && (
        <div className="bg-white bg-opacity-25 p-2 rounded-lg">
          <div>
            <div className="flex">
              <div className="mx-2">{LoopTrue(20, 20, '#130e91')}</div>
              <div className="mx-2">{LoopTrue(20, 20, '#c22547')}</div>
              <div className="mx-2">{LoopTrue(20, 20, '#46e891')}</div>
            </div>
            <div className="flex justify-center mt-2 animate-pulse">
              <p className="text-white font-bold text-xl">Loading...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loader
