export default () => ({
  app: {
    port: parseInt(process.env.PORT ?? '1337', 10),
  },
});
