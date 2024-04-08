import React from "react"
import memeData from "../memesData.js"

export default function Meme() {
  const [memeImage, setImage] = React.useState("")
  
  function getMemeImage() {
    const memes = memeData.data.memes
    const randomNum = Math.floor(Math.random() * memes.length)
    setImage(memes[randomNum].url)
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img src={memeImage} className="meme--image" />
      </form>
    </main>
  )
}