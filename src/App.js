import './App.css';
import './App.scss'

import {About, Footer, Header, Testimonials, Work, Skills} from './container'
import {Navbar} from './components'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
