import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import Toggle from './Toggle'
const ImageViewer = (props) => {
  const [modelCase, setModelCase] = useState(1)

  const cancelButtonRef = useRef(null)
  const {
    open,
    imageUrl,
    setView,
    setOpen,
    setEdgeDetection,
    setLoading,
    setData,
  } = props
  const edgeClick = () => {
    setOpen(false)
    axios
      .post('http://127.0.0.1:5000/edgeDetection', {
        image: imageUrl,
      })
      .then((res) => {
        setEdgeDetection(res.data)
        setView(true)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const noiseDetectionClick = () => {
    setOpen(false)
    axios
      .post('http://127.0.0.1:5000/noise', {
        image: imageUrl,
        modelCase: modelCase,
      })
      .then((res) => {
        setData(res.data)
        setView(true)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="p-1 relative inline-block align-bottom bg-white rounded-lg bg-opacity-40 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <img src={imageUrl} className="w-full w-full rounded-t-md" />
              <div className="flex justify-center">
                {' '}
                <span className="text-md font-bold">
                  {' '}
                  Which model do you think is the closest(for image
                  restoration)?
                </span>
              </div>

              <div className="flex justify-center">
                <Toggle modelCase={modelCase} setModelCase={setModelCase} />
              </div>
              <div className="flex justify-center">
                <div className="">
                  <div className="text-sm break-normal italic">
                    Model A: Salt&Pepper/Speckle
                  </div>
                  <div className="text-sm break-normal italic">
                    Model B: Exponential/Guassian/Rayleigh/Uniform/Poisson
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-md px-4 py-3 sm:px-6 sm:flex flex justify-center">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2  text-[#ffffff] font-bold bg-[#00A884] hover:bg-[#0b5e4c] focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => edgeClick()}
                  ref={cancelButtonRef}
                >
                  Edge Detection
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2  text-[#ffffff] font-bold bg-[#130e91] hover:bg-[#04015c] focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => noiseDetectionClick()}
                >
                  Restore Image
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default ImageViewer
