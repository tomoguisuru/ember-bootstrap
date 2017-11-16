import Component from '@ember/component';
import { get } from '@ember/object';

import BaseMixin from 'ember-bootstrap/mixins/bootstrap-component-base';

const AlertLink = Component.extend(BaseMixin, {
  tagName: 'a',

  attributeBindings: [
    'href',
    'target',
  ],

  base: 'alert-link',
  href: null,

  click(e) {
    const onClick = get(this, 'onClick');

    if (onClick) {
      e.preventDefault();

      return onClick();
    }
  }
});

export default AlertLink;
