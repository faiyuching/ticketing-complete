import axios from 'axios';

export default ({ req }) => {

  if (typeof window === 'undefined') {
    // We are on the server
    window.setTimeout(60000)
    return axios.create({
      baseURL: 'https://www.zhuominginfo.org/',
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};
