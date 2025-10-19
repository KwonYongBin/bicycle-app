import axios from 'axios';

// “비동기 함수로 axios GET 요청을 보내서, 응답 객체의 data만 반환한다.”
const axiosData = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

export default axiosData;