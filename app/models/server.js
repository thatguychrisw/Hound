import DS from 'ember-data';

export default DS.Model.extend({
  cc: DS.attr('string'),
  country: DS.attr('string'),
  distance: DS.attr('number'),
  distanceMi: DS.attr('number'),
  host: DS.attr('string'),
  lat: DS.attr('number'),
  lon: DS.attr('number'),
  location: DS.attr('string'),
  ping: DS.attr('number'),
  sponsor: DS.attr('string')
});
