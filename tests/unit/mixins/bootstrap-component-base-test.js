import EmberObject from '@ember/object';
import BootstrapComponentBaseMixin from 'ember-bootstrap/mixins/bootstrap-component-base';
import { module, test } from 'qunit';

module('Unit | Mixin | bootstrap component base');

// Replace this with your real tests.
test('it works', function(assert) {
  let BootstrapComponentBaseObject = EmberObject.extend(BootstrapComponentBaseMixin);
  let subject = BootstrapComponentBaseObject.create();
  assert.ok(subject);
});
