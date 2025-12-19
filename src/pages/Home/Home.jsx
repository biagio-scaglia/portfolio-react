import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GridScan } from '../../components/GridScan'
import '../../styles/Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="home-gridscan">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <header className="home-header">
        <h1>Biagio Scaglia</h1>
        <p className="home-subtitle">Web Developer & UX/UI Designer</p>
        <button className="home-button" onClick={() => navigate('/esplora')}>
          Esplora
        </button>
      </header>
    </div>
  )
}

export default Home

