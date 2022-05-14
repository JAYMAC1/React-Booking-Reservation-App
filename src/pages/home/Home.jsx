import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homecontainer'></div>
    </div>
  )
}

export default Home
