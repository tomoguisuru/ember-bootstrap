import Mixin from '@ember/object/mixin';

import { assert } from '@ember/debug';
import { computed, get } from '@ember/object';
import { isBlank, isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export default Mixin.create({
  classNameBindings: [
    'base',
    '_modifiers',
  ],

  attributeBindings: ['role'],

  base:      '',
  modifiers: '',

  _modifiers: computed('modifiers', function() {
    let attrs = get(this, 'modifiers');

    if (isEmpty(attrs)) {
      return;
    }

    if (!isArray(attrs)) {
      attrs = attrs.split(',');
    }

    return this._reducer(get(this, 'base'), attrs);
  }),

  /**
   *
   * @param {string} base
   * @param {Array} collection
   * @private
   */
  _reducer(base, collection) {
    if (isEmpty(collection)) { return; }

    return collection.reduce((r, v) => {
      if (!isEmpty(v)) {
        if (isBlank(base)) {
          r.push(v.trim());
        } else {
          r.push(`${base}-${v.trim()}`);
        }

      }
      return r;
    }, []).join(' ');
  },

  didReceiveAttrs() {
    this._super(...arguments);

    const base = get(this, 'base');

    assert(`${this.toString()} 'base' is required`, base);
  }
});
