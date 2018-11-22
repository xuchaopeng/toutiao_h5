import axios from 'axios';

export function getArtilceData(data) {
  const url = '//xcpeng.cn/statics/article-type';

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    })
    .catch(e => {
      return Promise.reject(e);
    });
}
