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
  PxMapGlBehavior.GeoJSONSourceImpl = {
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
        observer: 'shouldUpdateInst',
        notify: true
      },
      id: {
        type: String,
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
      PxMapGlBehavior.SourceImpl.addInst.call(this, parent);
   },

    createInst(options) {
      return {
        data: options.data,
        id: options.id,
        type: options.type
      };
    },

    /*
     * Update the instance if the new data is not the same as the old OR if the
     * new style is not the same as the old. (Stringifying is needed here to be
     * able to do a deep equality check).
     */
    updateInst(lastOptions, nextOptions) {
      // Run Get Options to account for empty object and inject nullIsland:
      console.log(this.elementInst);
      const options = this.getInstOptions();
      this.elementInst.setData(options.data);
    },

    getInstOptions() {
      var srcData = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [0, 0]
            },
            "properties": {
                "name": "null island"
            }
        }]
      };
      if (this.data && this.data !== {})
        srcData = this.data;

      return {
        data: srcData,
        id: this.id || '',
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
      this.fire('px-map-gl-layer-geojson-feature-added', detail);
    },
    /**
     * Fired when a feature is attached the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-gl-layer-geojson-feature-added
     */

    _handleFeatureRemoved(evt) {
      if (!evt || !evt.layer) return;

      // Unbind layer click events
      evt.layer.off();

      const detail = {};
      if (evt.layer && evt.layer.feature) {
        detail.feature = evt.layer.feature;
      }
      this.fire('px-map-gl-layer-geojson-feature-removed', detail);
    },
    /**
     * Fired when a feature is removed from the map. Note that every feature is
     * added/removed when any part of the `data` attribute is updated.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-gl-layer-geojson-feature-added
     */

    _handleFeatureTapped(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-gl-layer-geojson-feature-tapped', detail);
    },
    /**
     * Fired when a feature is tapped by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-gl-layer-geojson-feature-tapped
     */

    _handleFeaturePopupOpened(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-gl-layer-geojson-feature-popup-opened', detail);
    },
    /**
     * Fired when a feature's popup is opened by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-gl-layer-geojson-feature-popup-opened
     */

    _handleFeaturePopupClosed(evt) {
      const detail = {};
      if (evt.target && evt.target.feature) {
        detail.feature = evt.target.feature;
      }
      this.fire('px-map-gl-layer-geojson-feature-popup-closed', detail);
    }
    /**
     * Fired when a feature's popup is closed by the user.
     *
     *   * {Object} detail - Contains the event details
     *   * {Object|undefined} detail.feature - Object containing the feature's GeoJSON source
     *
     * @event px-map-gl-layer-geojson-feature-popup-closed
     */
  };
  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.GeoJSONSource = [
    PxMapGlBehavior.Source,
    PxMapGlBehavior.GeoJSONSourceImpl
  ];
})();
