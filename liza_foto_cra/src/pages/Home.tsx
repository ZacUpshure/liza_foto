import {
  Navbar,
  Hero
} from '../components';

const Home = () => {
  return (
    <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

      </div>
    </>
  )
}

export default Home