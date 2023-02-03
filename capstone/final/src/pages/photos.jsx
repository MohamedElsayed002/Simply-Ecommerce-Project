
import Image from "../component/Image"
import React , {useContext} from 'react'
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos () {
  const {allPhotos} = useContext(Context)
  const imagesElement = allPhotos.map((img , i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))
  return (
    <main className="photos">
      {imagesElement}
    </main>
  )
}

export default Photos