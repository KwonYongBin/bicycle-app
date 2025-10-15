import { Map } from 'react-kakao-maps-sdk';
import useKakaoLoader from './useKakaoLoader';
import Maps from './Maps';

function App() {

  useKakaoLoader()

  return (
    <Maps
      id='map'
      center={{lat: 33.450701, lng: 126.570667}}
      style={{width:"80%", height: "800px"}}
      level={3}
    />
  );
}

export default App;