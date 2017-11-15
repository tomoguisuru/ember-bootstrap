import Component from '@ember/component';
import BaseMixin from 'ember-bootstrap/mixins/bootstrap-component-base';

import layout from './template';

const AlertComponent = Component.extend(BaseMixin, {
  layout,

  role: 'alert',

  base: 'alert',
});

export default AlertComponent;
