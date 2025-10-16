import axios from 'axios';

const axiosData = async (url) => {
  const response = await axios.get(url);

  return response.data;
}

export default axiosData;