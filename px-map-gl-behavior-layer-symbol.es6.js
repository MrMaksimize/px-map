(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   *
   * @polymerBehavior PxMapGlBehavior.GeoJSONLayer
   */
  PxMapGlBehavior.SymbolLayerImpl = {
    properties: {
      /**
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * @type {Object}
       */
      // Properties defined here are only for this layer type.
      // Layout
      iconImage: {
        type: String,
        observer: 'shouldUpdateInst'
      },
      iconAllowOverlap: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },
      iconSize: {
        type: Number,
        value: 1,
        observer: 'shouldUpdateInst'
      }
      /*iconProperty {
        type: String,
        value: 'icon'
      }*/
      /*iconPropertySpriteMap {
        type: Object,
        value: function() {
            return {}
        }*/
    },

    /**
     * Forces the GeoJSON layer to deeply check the `data` attribute for differences
     * in the data from the last draw, and make any necessary updates. Call this
     * method if you are passing an object by reference to `data` and making deep
     * updates that don't trigger property observers.
     *
     * @return {undef}
     */
    update() {
      if (!this.elementInst) return;

      this.shouldUpdateInst();
    },

    canAddInst() {
      return this.data && typeof this.data === 'object' && Object.keys(this.data).length;
    },

    // extends the layer `addInst` method to harvest and fire events
    addInst(parent) {
      this.bindEvents({
        // Switch Pointer To Hand
        'mouseenter': this._switchPointer.bind(this),
        'mouseleave': this._switchPointer.bind(this)
      }, parent.elementInst, this.id)

      // Now call layer's add
      PxMapGlBehavior.LayerImpl.addInst.call(this, parent);
    },





    createInst(options) {
      const symbolLayerInst = options;
      return symbolLayerInst;
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the
     * new style is not the same as the old. (Stringifying is needed here to be
     * able to do a deep equality check).
     */
    updateInst(lastOptions, nextOptions) {
      // TODO - this needs rework, but leaving it till I have active layers.
      console.log('gl-gj-source-update-instance');
      if (!Object.keys(nextOptions.data).length) {
        this.elementInst.clearLayers();
      }
      else if (Object.keys(nextOptions.data).length && (lastOptions.dataHash !== nextOptions.dataHash || lastOptions.featureStyleHash !== nextOptions.featureStyleHash)) {
        const styleAttributeProperties = this.getInstOptions().featureStyle;

        this.elementInst.clearLayers();
        this.elementInst.options.style = (feature) => {
          const featureProperties = feature.properties.style || {};
          return this._getStyle(featureProperties, styleAttributeProperties);
        };

        this.elementInst.addData(nextOptions.data);
        if (nextOptions.showFeatureProperties) {
          this._bindFeaturePopups();
        }
      }
      else if (lastOptions.showFeatureProperties !== nextOptions.showFeatureProperties) {
        if (nextOptions.showFeatureProperties) this._bindFeaturePopups();
        if (!nextOptions.showFeatureProperties) this._unbindFeaturePopups();
      }
    },

    getInstOptions() {
      const options = PxMapGlBehavior.LayerImpl.getInstOptions.call(this);
      options.type = 'symbol';

      // Layout
      options.layout['icon-allow-overlap'] = this.iconAllowOverlap;
      options.layout['icon-size'] = this.iconSize;

      //if (this.iconImage)
        options.layout['icon-image'] = this.iconImage

      // For mapping icons.
      /*else {
        options.layout['icon-image'] = this.
      }*/

      return options;
    }
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.SymbolLayer = [
    PxMapGlBehavior.Layer,
    PxMapGlBehavior.SymbolLayerImpl
  ];
})();
