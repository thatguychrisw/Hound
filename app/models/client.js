import DS from 'ember-data';

export default DS.Model.extend({
  ip: DS.attr('string'),
  isp: DS.attr('string'),
  lat: DS.attr('number'),
  lon: DS.attr('number')
});
