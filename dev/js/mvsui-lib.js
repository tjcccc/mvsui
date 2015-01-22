require.config({
  paths: {
    'jquery': 'jquery.min',
    'bootstrap': 'bootstrap.min',
    'condiments': 'condiments.min'
  }
});

require([
  'jquery',
  'bootstrap',
  'condiments'
]);