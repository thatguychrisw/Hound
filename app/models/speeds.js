import DS from 'ember-data';

export default DS.Model.extend({
  download: DS.attr('number'),
  originalDownload: DS.attr('number'),
  originalUpload: DS.attr('number'),
  upload: DS.attr('number')
});
