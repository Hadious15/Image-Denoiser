import React, { useState } from 'react'
import axios from 'axios'
import { Loader, DalleOutput } from '../Components'
import BackgroundImage from '../Image/background.jpeg'
import Link from 'next/link'

const Dalle = () => {
  const [prompt, setprompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [typing, setTyping] = useState(true)
  const handleChange = (e) => {
    setTyping(true)
    const { value } = e.target
    setprompt(value)
  }
  const handleSubmit = (e) => {
    setTyping(false)
    setLoading(true)
    e.preventDefault()
    console.log(prompt)
    axios
      .post('http://127.0.0.1:5000/dalle', { prompt: prompt })
      .then((res) => {
        setImageUrl(res.data)
        console.log(res.data)

        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  var sectionStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
  }
  return (
    <div
      style={sectionStyle}
      className="  min-h-screen bg-no-repeat bg-scroll bg-[url('https://media.idownloadblog.com/wp-content/uploads/2020/07/iPad-gradient-wallpaper-idownloadblog-V8byArthur1992as.jpeg')]"
    >
      {' '}
      <div className="flex justify-end p-4 text-lg text-gray-100">
        <Link
          href="http://localhost:3000"
          className="   items-center border-b-2  px-1 pt-1 text-md font-medium text-gray-100 hover:border-gray-700 hover:text-gray-700"
        >
          Home >>
        </Link>
      </div>
      <div className="flex  justify-center items-start ">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center mt-10  bg-white bg-opacity-30 p-4 rounded-lg">
              <div>
                <input
                  type="text"
                  id="input"
                  value={prompt}
                  required
                  autoComplete="off"
                  name="prompt"
                  onChange={handleChange}
                  placeholder=" Please write a prompt of image content"
                  className="file:bg-gradient-to-b  p-6
                h-12
       
             w-96
             font-bold
          
             file:rounded-sm
           file:text-white 
             file:cursor-pointer file:shadow-lg
           file:shadow-blue-600/50 bg-gradient-to-br
           from-gray-600 to-gray-700
           text-white/80 rounded-full 
             cursor-pointer shadow-xl
           shadow-gray-700/60 "
                />
              </div>
              <div>
                {' '}
                <button
                  type="submit"
                  className=" rounded-full  border-gray-300 shadow-sm px-4 py-4  text-[#ffffff] font-bold bg-blue-600 hover:bg-indigo-800 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  // onClick={() => setOpen("")}
                >
                  GO
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center mt-10 items-center">
          {' '}
          <div className="w-max">
            <Loader loading={loading} />
          </div>
        </div>
      )}
      {imageUrl !== '' && !loading && !typing && (
        <div className=" flex justify-center mt-2">
          <div className="w-6/12">
            <DalleOutput image={imageUrl} noiseType={prompt} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dalle
