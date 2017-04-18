import DS from 'ember-data';

export default DS.Model.extend({
  client: DS.belongsTo('client'),
  server: DS.belongsTo('server'),
  speeds: DS.belongsTo('speeds'),
  date: DS.attr('date'),
  user: DS.belongsTo('user')
});
