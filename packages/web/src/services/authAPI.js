import axios from 'axios';

import configs from '~/configs';

const { REACT_APP_PUBLIC_URL } = configs;

const authAPI = axios.create({ baseURL: `${REACT_APP_PUBLIC_URL}/auth` });

export default authAPI;
