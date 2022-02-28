import './App.css';
import QuoteContainer from './containers/QuoteContainer';
import ColourSlider from './components/ColourSlider';

function App() {

  return (
    <>
    <section className="screen">
      <QuoteContainer />
    </section>
    <ColourSlider />
    </> 
  );
}

export default App;
