(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   * @polymerBehavior PxMapGlBehavior.GeoJSONLayer
   */
  PxMapGlBehavior.FillExtrusionLayerImpl = {
    properties: {
      // Properties defined here are only for this layer type.
      // Paint
      fillExtrusionOpacity: {
        type: Number,
        value: 1,
        observer: 'shouldUpdateInst'
      },
      /* can be set in one of two ways
       * if number is passed, set directly.
       * if {type: 'identity', 'property': 'height'} then
       * set using data driven styling
       */
      fillExtrusionColor: {
        type: Object,
        value: function() {
            return '#000000'
        },
        observer: 'shouldUpdateInst'
      },
      fillExtrusionTranslate: {
        type: Array,
        value: function() {
            return [0,0]
        }
      },
      fillExtrusionTranslateAnchor: {
        type: String,
        value: 'map'
      },
      // Purposely exclude pattern.
      //fillExtrusionPattern: {

      /* can be set in one of two ways
       * if number is passed, set directly.
       * if {type: 'identity', 'property': 'height'} then
       * set using data driven styling
       */
      //https://www.mapbox.com/help/how-map-design-works/#data-driven-styles
      fillExtrusionHeight: {
        type: Object,
        value: function() {
            return 0;
        },
        observer: 'shouldUpdateInst'
      },

      /* can be set in one of two ways
       * if Number is passed, set directly.
       * if {type: 'identity', 'property': 'min_height'} then
       * set using data driven styling
       */
      fillExtrusionBase: {
        type: Object,
        value: function() {
            return 0;
        },
        observer: 'shouldUpdateInst'
      }
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
    //addInst(parent) {
    //  console.log('gl-gj-addInst');
    //  PxMapGlBehavior.GlSourceImpl.addInst.call(this, parent);


      // Bind custom events. Events will be unbound automatically.
      /*const addedFn = this._handleFeatureAdded.bind(this);
      const removedFn = this._handleFeatureRemoved.bind(this);
      this.bindEvents({
        'layeradd' : addedFn,
        'layerremove' : removedFn
      });*/

      // If any layers already added before events bound, manually fire layer
      // added events to attach listeners/notify the world the layer is added
      /*if (this.elementInst.getLayers().length !== 0) {
        this.elementInst.eachLayer((layer) => {
          this.elementInst.fire('layeradd', { layer: layer });
        });
      }*/

      // Now call layer's add
      //PxMapGlBehavior.LayerImpl.addInst.call(this, parent);
    //},

    createInst(options) {
      console.log('createInst');
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
      options.type = 'fill-extrusion';
      // Paint
      options.paint['fill-extrusion-opacity'] = this.fillExtrusionOpacity;
      options.paint['fill-extrusion-color'] = this.fillExtrusionColor;
      options.paint['fill-extrusion-translate'] = this.fillExtrusionTranslate;
      options.paint['fill-extrusion-translate-anchor'] = this.fillExtrusionTranslateAnchor;
      options.paint['fill-extrusion-height'] = this.fillExtrusionHeight;
      options.paint['fill-extrusion-base'] = this.fillExtrusionBase;

      return options;
    }
  }

  /* Bind Layer behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.FillExtrusionLayer = [
    PxMapGlBehavior.Layer,
    PxMapGlBehavior.FillExtrusionLayerImpl
  ];
})();
