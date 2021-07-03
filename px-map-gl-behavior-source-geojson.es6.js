(function() {
  "use strict";

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = window.PxMapGlBehavior || {};

  /**
   *
   * @polymerBehavior PxMapGlBehavior.GeoJSONSource
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
       *
       * @type {Object}
       */
      data: {
        type: Object,
        observer: "shouldUpdateInst",
        notify: true
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
      return (
        this.data &&
        typeof this.data === "object" &&
        Object.keys(this.data).length
      );
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
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [0, 0]
            },
            properties: {
              name: "null island"
            }
          }
        ]
      };
      if (this.data && this.data !== {}) srcData = this.data;

      const options = PxMapGlBehavior.SourceImpl.getInstOptions.call(this);
      options.data = srcData;
      options.type = "geojson";
      return options;
    }
  };

  /* Bind GeoJSONSource behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.GeoJSONSource = [
    PxMapGlBehavior.Source,
    PxMapGlBehavior.GeoJSONSourceImpl
  ];
})();
