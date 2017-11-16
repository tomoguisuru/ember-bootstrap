import Component from '@ember/component';
import { get } from '@ember/object';

import BaseMixin from 'ember-bootstrap/mixins/bootstrap-component-base';

const AlertHeader = Component.extend(BaseMixin, {
  tagName: 'h4',

  base: 'alert-header',
});

export default AlertHeader;
