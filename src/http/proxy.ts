
export default {
  dev: {
    '/api/': {
      target: 'http://192.168.9.26:8000',
      changeOrigin: true,
    },
  }
};