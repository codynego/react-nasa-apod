import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Info } from './components/Info'
import { Loader } from './components/Loader'

function App() {
  const [backgroundImage, setbackgroundImage] = useState("")
  const [infoBar, setInfoBar] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [nasaData, setNasaData] = useState({})
  const [date, setDate] = useState("")


  async function fetchDataAPI () {
      let localData = localStorage.getItem('nasaData')

      if (!localData) {
        await fetch_data()
        return
      }
      console.log("fetched from local storage")
      localData = JSON.parse(localData).nasaData
      setNasaData(localData)
    }
  
  function persistData(nasaData) {
    localStorage.setItem('nasaData', JSON.stringify({nasaData: nasaData}))
  }

  async function fetch_data() {
    const NASA_API_KEY = import.meta.env.VITE_META_API_KEY;
    const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`;

    try {
        setIsLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        setNasaData(data)
        persistData(data)
        setIsLoading(false)
        console.log("fetched from api")
      } catch {
        console.log("error")
      }
  }

  useEffect(() => {
    fetchDataAPI()
  },[])

  return (
    <>
      {
        isLoading?<Loader/>
        :<main style={{backgroundImage: `url(${nasaData.hdurl})`}}>
        <Info infoBar ={infoBar} setInfoBar={setInfoBar} title={nasaData.title} date={nasaData.date} description={nasaData.explanation}/>
        <Footer setInfoBar={setInfoBar} title={nasaData.title}/>
      </main>
      }
    </>
  )
}

export default App
