/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      '@snowpack/plugin-typescript',
    ],
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
};
