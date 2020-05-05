import request from './request';

export const downloadFileRequest = id =>
  request.get(`/files/${id}`, {
    responseType: 'blob',
    timeout: 30000,
  });