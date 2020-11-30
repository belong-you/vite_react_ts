import axios from './intercept';

// 获取歌曲列表
export const getAudioList = () => axios.get('audio');
