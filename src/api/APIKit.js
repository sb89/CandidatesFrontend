import axios from 'axios';

const options = {
  baseURL: "http://localhost:5000/api/",
  timeout: 10000
}

export default axios.create(options);