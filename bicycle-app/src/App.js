import useKakaoLoader from './useKakaoLoader';
import Maps from './Maps';

function App() {

  useKakaoLoader()

  return (
    <Maps
      id='map'
      center={{lat: 37.575877, lng: 126.976897}}
      style={{width:"80%", height: "800px"}}
      level={3}
    />
  );
}

export default App;