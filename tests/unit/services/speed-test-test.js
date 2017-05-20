import { moduleFor, test } from 'ember-qunit';

moduleFor('service:speed-test', 'Unit | Service | speed test', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});


/**
 * Some pseudo code description of the service api
 *
 * test(provider) - a single one-off test, provider params is optional, returns results
 *
 * start(provider) - starts running tests at continuous interval,  provider param is optional, puts results in store as they come in
 *
 * stop() - stop running tests
 *
 * status - current testing status
 *
 */

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
