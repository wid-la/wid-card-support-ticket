'use strict';

(function () {

  Polymer({

    is: 'wid-card-support-ticket',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {
      /**
       * Name
       * @type {String}
       */
      name: {
        type: String,
        value: 'Support'
      },

      /**
       * icon
       * @type {String}
       */
      icon: {
        type: String
      },

      /**
       * tickets
       * @type {Object}
       */
      tickets: {
        type: Object
      }

    },

    _iconPath: function _iconPath(value) {
      return '/images/cards/' + value;
    },

    _ticketId: function _ticketId(value) {
      return '#' + value;
    },

    _rowClass: function _rowClass(index) {
      var odd = '';
      if (index % 2 === 0) {
        odd = 'odd';
      }
      return odd + ' flex layout horizontal center-center';
    }

  });
})();