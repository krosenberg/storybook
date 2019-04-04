export const unused = 'foo';

// eslint-disable-next-line no-unused-vars
export const webpack = async (config, env) => config;

// list of globs & external urls
export const entries = [];

export const theme = {};

export const presets = [];
export const addons = [];

export const logLevel = 'info';

// eslint-disable-next-line no-unused-vars
export const managerWebpack = async (config, env) => config;

export const output = {
  location: './',
  compress: false,
  preview: true, // would enable/disable or set a custom location
};

export const server = {
  port: 1337,
  host: 'localhost',
  // static: {
  //   '/': 'assets',
  // },
  // ssl: {
  //   ca: [],
  //   cert: '',
  //   key: '',
  // },
  // middleware: async (app, server) => {},
};