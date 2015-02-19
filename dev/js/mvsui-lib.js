require.config({
  paths: {
    'jquery': 'jquery.min',
    'bootstrap': 'bootstrap.min',
    'zrender': 'zrender',
    'condiments': 'condiments.min'
  }
});

require([
  'jquery',
  'bootstrap',
  'zrender',
  'condiments'
]);
