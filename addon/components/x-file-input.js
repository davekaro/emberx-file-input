import Ember from 'ember';
import layout from '../templates/components/x-file-input';

export default Ember.Component.extend({
  classNameBindings: [':x-file-input', 'disabled:x-file-input--disabled'],
  attributeBindings: ['accept'],
  tagName: 'span',
  layout: layout,
  tabindex: 0,

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {$.Event} e Native change event
   */
  change(e) {
    this.sendAction("action", e.target.files);

    // Allows you to pick the same file twice in a row.
    if (this.get('resetInput')) {
      this.$().val('');
    }
  },

  randomId: Ember.computed(function() {
    return Math.random().toString(36).substring(7);
  })
});
