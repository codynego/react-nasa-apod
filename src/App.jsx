import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Info } from './components/Info'
import { Loader } from './components/Loader'

function App() {
  const [title, setTitle] = useState("")
  const [backgroundImage, setbackgroundImage] = useState("")
  const [infoBar, setInfoBar] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  async function fetch_data() {
    const NASA_API_KEY = import.meta.env.VITE_META_API_KEY;
    const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`;

    try {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setTitle(data.title)
      setDescription(data.explanation)
      setbackgroundImage(data.hdurl)
      setDate(data.date)
      setIsLoading(false)
    } catch {
      console.log("error")
    }

  }

  useEffect(() => {
    fetch_data()
  },[])

  return (
    <>
      {
        isLoading?<Loader/>
        :<main style={{backgroundImage: `url(${backgroundImage})`}}>
        <Info infoBar ={infoBar} setInfoBar={setInfoBar} title={title} date={date} description={description}/>
        <Footer setInfoBar={setInfoBar} title={title}/>
      </main>
      }
    </>
  )
}

export default App
