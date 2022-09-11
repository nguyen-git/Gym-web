import './App.css';
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs';
import Reason from './component/Reason/Reason';
import Plans from './component/Plans/Plans'
import Testimonial from './component/Testimonial/Testimonial';
import Join from './component/Join/Join'
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reason />
          <Plans />
          <Testimonial />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
