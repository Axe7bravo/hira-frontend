
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import HowItWorks from '../components/HowItWorks';



const Home = () => {

  return (
    <div>
 
      <Hero />
      <hr/>
      <FeaturedListings />
      <hr/>
      <HowItWorks />
      {/* Add other sections as needed */}
    </div>
  );
};

export default Home;