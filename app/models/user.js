import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  testResults: DS.hasMany('test-result')
});
