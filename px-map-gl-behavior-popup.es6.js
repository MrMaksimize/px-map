(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.Popup
   */
  PxMapGlBehavior.PopupImpl = {
    properties: {
      disableCloseButton: {
        type: String,
        value: false
      },
      disableCloseOnClick: {
        type: String,
        value: false
      },
      anchor: {
        type: String
      },
      // click
      // dblclick
      // hover
      showEvent: {
        type: String,
        value: 'click'
      },
      popupData: {
        type: Object,
        value: function() {
        },
        readOnly: true,
        reflectToAttribute: true
      }
    },
    attached() {
      console.log('attached');
      this.notifyInstReady(this.canAddInst());
      if (this.showEvent === 'click')
        this.listen(this.parentNode, 'px-map-gl-layer-click', 'shouldAddInst');
      else if (this.showEvent === 'dblclick')
        this.listen(this.parentNode, 'px-map-gl-layer-dblclick', 'shouldAddInst');
      else if (this.showEvent === 'hover') {
        this.listen(this.parentNode, 'px-map-gl-layer-mouseenter', 'shouldAddInst');
        this.listen(this.parentNode, 'px-map-gl-layer-mouseleave', 'removeInst');
      }
      else
        throw new Error('Invalid showEvent provided')
    },

    // Say we want to programmatically trigger a popup.  The way that will be done
    // is by setting an active feature on the layer, then dispatching the event with the
    // parent to the popup.


    shouldAddInst(evt) {
      if (this.elementInst) {
        this.removeInst();
      }
      PxMapGlBehavior.ElementImpl.shouldAddInst.call(this);
      if (this.elementInst) {
        this.addInst(evt.detail);
      };
    },

    addInst(eventDetail) {
      const popupData = {
        lngLat: eventDetail.event.lngLat,
        type: eventDetail.event.type,
        features: eventDetail.event.features || [],
      };
      if (popupData.features[0].properties) {
        popupData.activeFeatureProperties = this._toArray(popupData.features[0].properties);
      }
      this._setPopupData(popupData);
      const node = Polymer.dom(this.root).querySelector('#popup-template');
      this.elementInst.setLngLat(eventDetail.event.lngLat);
      this.elementInst.setDOMContent(node);
      this.elementInst.addTo(eventDetail.event.target);
    },

    _toArray(obj) {
      return Object.keys(obj).map(function(key) {
        return {
          name: key,
          value: obj[key]
        };
      });
    },

    removeInst() {
      this.shouldRemoveInst();
      this.elementInst.remove();
    },

    createInst(options) {
      const popup = new mapboxgl.Popup(options);
      return popup;
    },

    getInstOptions() {
      const options = {
        closeButton: !this.disableCloseButton,
        closeOnClick: !this.disableCloseOnClick
      }
      if (this.anchor)
        options.anchor = this.anchor

      return options;
    },

    canAddInst() {
      return true;
    }
  };
  /* Bind Popup behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.Popup = [
    PxMapGlBehavior.Element,
    PxMapGlBehavior.PopupImpl
  ];


  /**
   * @polymerBehavior PxMapBehavior.InfoPopup
   */
  PxMapGlBehavior.InfoPopupImpl = {
    properties: {
      /**
       * Title text to display in bold at the top of the popup. Should be kept
       * relatively short (25 characters or less) to keep the popup from
       * growing too large.
       *
       * @type {String}
       */
      title: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * Description text to place in the body of the popup. Try to keep the
       * description to a reasonable size to keep the popup from growing
       * too large.
       *
       * To display more information, bind to the popup's parent layer (e.g. a marker)
       * tapped event and display more information in the UI of your application.
       *
       * @type {String}
       */
      description: {
        type: String,
        observer: 'shouldUpdateInst'
      },

      /**
       * The URL for an image to be placed inside the popup. Use a small, square
       * thumbnail-style image (e.g. 75px by 75px). You may use any image type
       * that you would put in an html
       * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
       * target="_blank">`<img>`</a> tag.
       *
       * @type {String}
       */
      imgSrc: {
        type: String,
        observer: 'shouldUpdateInst'
      }
    },

    createInst(options) {
      return new mapboxgl.Popup(options);
    },

    updateInst(lastOptions, nextOptions) {
      // TODO might be interesting to implement this for streaming data.
      let updates = {};

      if (lastOptions.title !== nextOptions.title) {
        updates.title = nextOptions.title;
      }
      if (lastOptions.description !== nextOptions.description) {
        updates.description = nextOptions.description;
      }
      if (lastOptions.imgSrc !== nextOptions.imgSrc) {
        updates.imgSrc = nextOptions.imgSrc;
      }

      if (Object.keys(updates).length) {
        this.elementInst.updateSettings(updates);
      }
    }

  };
  /* Bind InfoPopup behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.InfoPopup = [
    PxMapGlBehavior.Popup,
    PxMapGlBehavior.InfoPopupImpl
  ];

})();
