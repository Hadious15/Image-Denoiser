import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { isConstructorTypeNode } from 'typescript'
const Toggle = (props) => {
  const { modelCase, setModelCase } = props

  return (
    <div className="m-2">
      <span className="isolate inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className=" mx-2 relative -ml-px inline-flex items-center rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setModelCase(1)}
        >
          Model A
        </button>{' '}
        <button
          type="button"
          className=" mx-2 relative -ml-px inline-flex items-center rounded-lg border border-gray-300 bg-white px-2 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setModelCase(2)}
        >
          Model B
        </button>
      </span>
    </div>
  )
}
export default Toggle
