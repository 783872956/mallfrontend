import axios from 'axios';

export const get = (url, params) => axios.get(url, params);

export const post = (url, params) => axios.request({
    url: url,
    method: 'POST',
    data: params,
});

export const put = (url, params) => axios.request({
    url: url,
    method: 'put',
    data: params,
});

export const deleteRequest = (url, params) => axios.request({
    url: url,
    method: 'delete',
    data: params,
});
