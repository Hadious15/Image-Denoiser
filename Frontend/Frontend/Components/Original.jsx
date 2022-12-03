import React, { useState } from 'react'

import { useCallback } from 'react'
import { useEffect } from 'react'
const Output = (props) => {
  const { image, message } = props

  return (
    <div className="bg-white w-[400px] bg-opacity-25 p-2 rounded-lg">
      <div className="">
        <img src={image} className="w-96 h-96 rounded-md" />
      </div>
      <div className="flex justify-center mt-2 ">
        <div className="text-white bg-gray-900 p-2 rounded-lg text-lg font-bold flex">
          <div>{message}</div>
        </div>
      </div>
    </div>
  )
}

export default Output
