import axios from 'axios'

axios.defaults.baseURL = 'http://bozai.tech/api/'
// axios.defaults.baseURL = 'http://192.168.1.80/api/'

// axios 拦截器
axios.interceptors.response.use(response => {
	if (response.status === 200) {
		return response.data;
	}
})

export default axios;