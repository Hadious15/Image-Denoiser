import React, { useState } from 'react'

import { useCallback } from 'react'
import { useEffect } from 'react'
const Output = (props) => {
  const { data } = props

  return (
    <div className="bg-white w-[400px] bg-opacity-25 p-2 rounded-lg">
      <div className="">
        <img src={data.url} className="w-96 h-96 rounded-md" />
      </div>
      <div className="flex justify-center mt-2 ">
        <div className="text-white bg-gray-900 p-2 rounded-lg text-lg font-bold flex">
          <div>
            {data.noise} noise was detected.{data.filter}.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Output
