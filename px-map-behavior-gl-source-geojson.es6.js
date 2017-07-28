(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapBehavior = (window.PxMapBehavior || {});

  /**
   *
   * @polymerBehavior PxMapBehavior.GeoJSONLayer
   */
  PxMapBehavior.GlGeoJSONSourceImpl = {
    properties: {
      /**
       * An object formatted as a GeoJSON FeatureCollection with one or many Features.
       * Each feature can be formatted as any valid GeoJSON geometry type: Point,
       * LineString, Polygon, MultiPoint, MultiLineString, MultiPolygon,
       * or GeometryCollection. See the [GeoJSON spec](http://geojson.org/geojson-spec.html)
       * for guidance on generating valid GeoJSON.
       *
       * Each feature should contain a `properties` object that can hold metadata
       * about the feature. Optionally, the feature's `properties.style` can be
       * set to an object that will be used to style the feature when it is drawn.
       * Styles set in a feature's `properties.style` will override the styles
       * set in the `featureStyle` attribute. See the `featureStyle` attribute
       * documentation for a list of available style options.
       *
       * @type {Object}
       */
      data: {
        type: Object,
        observer: 'shouldUpdateInst'
      },
      id: {
        type: String,
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
    addInst(parent) {
      console.log('gl-gj-addInst');
      PxMapBehavior.GlSourceImpl.addInst.call(this, parent);


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
      //PxMapBehavior.LayerImpl.addInst.call(this, parent);
    },

    createInst(options) {
      console.log(options);

      const geoJsonSourceInst = {
        data: options.data,
        id: options.id,
        type: options.type
      };
      return geoJsonSourceInst;
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the
     * new style is not the same as the old. (Stringifying is needed here to be
     * able to do a deep equality check).
     */
    updateInst(lastOptions, nextOptions) {
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
      return {
        data: this.data || {},
        id: this.id || '',
        dataHash: JSON.stringify(this.data || {}),
        type: 'geojson'
      };
    },

    _handleFeatureAdded(evt) {
      if (!evt || !evt.layer) return;

      // Bind layer click events
      evt.layer.on('click', this._handleFeatureTapped.bind(this));
      evt.layer.on('popupopen', this._handleFeaturePopupOpened.bind(this));
      evt.layer.on('popupclose', this._handleFeaturePopupClosed.bind(this));

      const detail = {};
      if (evt.layer && evt.layer.feature) {
        detail.feature = evt.layer.feature;
      }
      this.fire('px-map-layer-geojson-feature-added', detail);
    },
    /**
     * Fired when a feature is attached the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-added
     */

    _handleFeatureRemoved(evt) {
      if (!evt || !evt.layer) return;

      // Unbind layer click events
      evt.layer.off();

      const detail = {};
      if (evt.layer && evt.layer.feature) {
        detail.feature = evt.layer.feature;
      }
      this.fire('px-map-layer-geojson-feature-removed', detail);
    },
    /**
     * Fired when a feature is removed from the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-added
     */

    _handleFeatureTapped(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-layer-geojson-feature-tapped', detail);
    },
    /**
     * Fired when a feature is tapped by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-tapped
     */

    _handleFeaturePopupOpened(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-layer-geojson-feature-popup-opened', detail);
    },
    /**
     * Fired when a feature's popup is opened by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-popup-opened
     */

    _handleFeaturePopupClosed(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-layer-geojson-feature-popup-closed', detail);
    }
    /**
     * Fired when a feature's popup is closed by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-layer-geojson-feature-popup-closed
     */
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapBehavior.GlGeoJSONSource = [
    PxMapBehavior.GlSource,
    PxMapBehavior.GlGeoJSONSourceImpl
  ];
})();
