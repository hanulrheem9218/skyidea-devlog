import Navbar from '../components/Navbar'
import VideoPlayer from '../components/VideoPlayer'

const Home = () => {
  return (
    <div className="home">
        <Navbar isBlack={true}/>
        <VideoPlayer/>
    </div>
  )
}

export default Home