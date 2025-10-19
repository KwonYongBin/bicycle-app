import useKakaoLoader from './useKakaoLoader';
import MapData from './pages/MapData';
import './css/reset.css';

function App() {

  useKakaoLoader()

  return (
    <>
      <MapData />
    </>
  );
}

export default App;