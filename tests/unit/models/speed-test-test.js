import { moduleForModel, test } from 'ember-qunit';

moduleForModel('speed-test', 'Unit | Model | speed test', {
  // Specify the other units that are required for this test.
  needs: ['model:client', 'model:server', 'model:speed']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
