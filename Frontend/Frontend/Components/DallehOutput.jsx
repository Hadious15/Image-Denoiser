import React, { useState } from 'react'

import { useCallback } from 'react'
import { useEffect } from 'react'
const DalleOutput = (props) => {
  const { image, noiseType } = props

  return (
    <div className="bg-white bg-opacity-30 p-3 rounded-lg">
      <div className="">
        <img src={image} className=" rounded-md" />
      </div>
      <div className="flex justify-center mt-3 ">
        <div className="text-white bg-gray-900 p-2 rounded-lg text-lg font-bold flex">
          <div>{noiseType} </div>
        </div>
      </div>
    </div>
  )
}

export default DalleOutput
