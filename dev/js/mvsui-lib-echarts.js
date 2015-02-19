require.config({
  paths: {
    'jquery': 'js/jquery.min',
    'bootstrap': 'js/bootstrap.min',
    'condiments': 'js/condiments.min'
  }
});

require(
  [
    'jquery',
    'bootstrap',
    'condiments'
  ]
);
