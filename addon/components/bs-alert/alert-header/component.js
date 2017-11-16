import Component from '@ember/component';
import { get } from '@ember/object';

import BaseMixin from 'ember-bootstrap/mixins/bootstrap-component-base';

const AlertHeader = Component.extend(BaseMixin, {
  tagName: 'h4',

  base: 'alert-header',
  href: null,

  click(e) {
    const onClick = get(this, 'onClick');

    if (onClick) {
      e.preventDefault();

      return onClick();
    }
  }
});

export default AlertHeader;
