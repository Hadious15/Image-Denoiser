import React, { useState } from 'react'
import ImageViewer from '../Components/ImageViewer'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../Firebase/Config'
import { Output, Original } from '../Components'
import axios from 'axios'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import { Loader } from '../Components'
const Home = () => {
  const [image, setImage] = useState('')
  const [open, setOpen] = useState(false)
  const [edgeDetection, setEdgeDetection] = useState('')
  const [view, setView] = useState(false)
  const [data, setData] = useState({
    url: '',
    noise: '',
    filter: '',
  })
  const [loading, setLoading] = useState(false)

  const uploadImage = async (event) => {
    if (!event.target.files) return
    setLoading(true)
    const file = event.target.files[0]
    const storageRef = ref(storage, `Images/${file.name}`)
    const metadata = {
      contentType: file.type,
    }
    await uploadBytes(storageRef, file, metadata)
    getDownloadURL(storageRef).then(async (res) => {
      setImage(res)
      setOpen(true)
    })
  }
  console.log(data.url)
  return (
    <div className="bg-cover   items-center  bg-top bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]">
      {' '}
      <div className="flex justify-end p-4 text-lg">
        <a
          href="/aiTool"
          className="   items-center border-b-2  px-1 pt-1 text-md font-medium text-gray-100 hover:border-gray-700 hover:text-gray-700"
        >
          AiTool >>
        </a>
      </div>
      <div className="min-h-screen bg-cover  flex  justify-center items-center  bg-top bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]">
        <ImageViewer
          open={open}
          setOpen={setOpen}
          imageUrl={image}
          setImage={setImage}
          setEdgeDetection={setEdgeDetection}
          setLoading={setLoading}
          setView={setView}
          setData={setData}
        />

        <div className=" ">
          {/* Here is  */}
          <Loader loading={loading} />
          {image === '' && !loading && (
            <div>
              <input
                type="file"
                onChange={uploadImage}
                className="file:bg-gradient-to-b 
             file:from-blue-500
             file:to-blue-600 
             file:px-6 file:py-3
             font-bold
             file:m-5 
             file:border-none
             file:rounded-full
           file:text-white 
             file:cursor-pointer file:shadow-lg
           file:shadow-blue-600/50 bg-gradient-to-br
           from-gray-600 to-gray-700
           text-white/80 rounded-full 
             cursor-pointer shadow-xl
           shadow-gray-700/60"
              />
            </div>
          )}
          {image !== '' && view === true && !loading && (
            <div className="flex items-center">
              <Original image={image} message="Original Image" />
              <ArrowNarrowRightIcon className="h-40 w-40 text-indigo-700" />
              {edgeDetection !== '' && (
                <Original
                  image={edgeDetection}
                  message="Canny edge detection"
                />
              )}
              {data.url !== '' && edgeDetection === '' && (
                <Output data={data} noiseType="Hello world" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
