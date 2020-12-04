import axios from 'axios';

export default ({ req }) => {

  req.setTimeout(0);
  
  if (typeof window === 'undefined') {
    // We are on the server
    console.log(req.headers)
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
