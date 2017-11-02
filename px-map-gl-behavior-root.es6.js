(function() {
  'use strict';

  /****************************************************************************
   * BEHAVIORS
   ****************************************************************************/

  /* Ensures the behavior namespace is created */
  window.PxMapGlBehavior = (window.PxMapGlBehavior || {});

  /**
   *
   * @polymerBehavior PxMapGlBehavior.LeafletRoot
   */
  PxMapGlBehavior.MglRootImpl= {
    properties: {
      /**
       * Style
       *
       * @type {String}
       */
      style: {
        type: String,
        value: 'mapbox://styles/mapbox/dark-v9',
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set the mapbox-gl token.
       *
       * This property is not dynamic and can only be set once when the map is
       * first initialized.
       *
       * @type {String}
       */
      mglToken: {
        type: String,
        value: ''
      },


      /**
       * The latitude of the active map center. Can be used to set or update
       * the center of the map, or read from after the user moves the map to
       * get updated coordinates.
       *
       * @type {Number}
       */
      lat: {
        type: Number,
        value: 37.7672375,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The longitude of the active map center. Can be used to set or update
       * the center of the map, or read from after the user moves the map to
       * get updated coordinates.
       *
       * @type {Number}
       */
      lng: {
        type: Number,
        value: -121.9584131,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The zoom level of the active map. Can be used to set or update
       * the zoom level of the map, or read from after the user changes the
       * map zoom level to an updated value.
       *
       * @type {Number}
       */
      zoom: {
        type: Number,
        value: 10,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The zoom level of the active map. Can be used to set or update
       * the zoom level of the map, or read from after the user changes the
       * map zoom level to an updated value.
       *
       * @type {Number}
       */
      bearing: {
        type: Number,
        value: 0,
        notify: true,
        observer: 'shouldUpdateInst'
      },

      /**
       * The zoom level of the active map. Can be used to set or update
       * the zoom level of the map, or read from after the user changes the
       * map zoom level to an updated value.
       *
       * @type {Number}
       */
      pitch: {
        type: Number,
        value: 0,
        notify: true,
        observer: 'shouldUpdateInst'
      },


      /**
       * The maximum zoom level for the active map (the furthest the user can
       * zoom in). Setting it at the map level will take precedence over the
       * max zoom of all other layers, including tile layers. If you need to
       * set different zoom bounds based on the visible tile layer, set the
       * max zoom directly on your tile layer.
       *
       * @type {Number}
       */
      maxZoom: {
        type: Number,
        observer: 'shouldUpdateInst'
      },

      /**
      * The minimum zoom level for the active map (the furthest the user can
      * zoom out). Setting it at the map level will take precedence over the
      * min zoom of all other layers, including tile layers. If you need to
      * set different zoom bounds based on the visible tile layer, set the
      * min zoom directly on your tile layer.
       *
       * @type {Number}
       */
      minZoom: {
        type: Number,
        observer: 'shouldUpdateInst'
      },

      /**
       * Restricts the user from moving the map outside of a specific geographic
       * boundary. The user will be bounced back if they attempt to pan outside the view.
       * Disabled by default, letting the user pan to any point on the map.
       *
       * Pass an array of [lat,lng] values like the following:
       *
       *        [[40.712, -74.227], [40.774, -74.125]]
       *
       * The first pair should represent the southwest extend of the boundary,
       * and the second  pair should represent the northeast extend of the
       * boundary.
       *
       * @type {Array}
       */
      maxBounds: {
        type: Array,
        observer: 'shouldUpdateInst'
      },

      disableInteraction: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },
      /**
       * Set to disable dragging of the map with the mouse or by touch. Use to
       * restrict changing the map's visible area (e.g. for a static map) or
       * to set up a map for being updated programmatically (e.g. through regular
       * responses from an API).
       *
       * @type {Boolean}
       */
      disableDragging: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable zooming with the scroll wheel. Useful if you have a map
       * that takes up the full width of a page and want to allow the user to
       * scroll/swipe past without getting stuck in a zoom-in-zoom-out loop.
       *
       * @type {Boolean}
       */
      disableScrollZoom: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Set to disable the two-finger zoom gesture on touch devices.
       *
       * @type {Boolean}
       */
      disableTouchZoom: {
        type: Boolean,
        value: false,
        observer: 'shouldUpdateInst'
      },

      /**
       * Attribution control.  TODO - rethink if this is how all controls should work.
       * @type {Boolean}
       */
      disableAttributionControl: {
        type: Boolean,
        value: false
      },

      disableMapHash: {
        type: Boolean,
        value: false
      },


      /**
       * Uses flexbox to set the size of the map. Set the parent container
       * to use `display: flex;` in your CSS and the map will automatically
       * fill the container's available height and width.
       *
       * @type {Boolean}
       */
      flexToSize: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    },

    attached() {
      this.listen(this, 'px-map-gl-element-ready-to-add', 'shouldAddInst');
      if (this.canAddInst()) {
        this.fire('px-map-gl-element-ready-to-add');
      }
    },

    detached() {
      this.unlisten(this, 'px-map-gl-element-ready-to-add', 'shouldAddInst');
      this.shouldRemoveInst();
      this.removeInst();
    },

    shouldAddInst(evt) {
      if (Polymer.dom(evt).rootTarget !== this) return;

      PxMapGlBehavior.ElementImpl.shouldAddInst.call(this);
      this.addInst();
    },

    canAddInst() {
      return this.latLngIsValid(this.lat, this.lng);
    },

    createInst(options) {
      mapboxgl.accessToken = this.mglToken;
      // Set the container to an element.
      options.container = Polymer.dom(this.root).querySelector(options.container);

      const mapInst = new mapboxgl.Map(options);


      if (this.isShadyScoped()) {
        mapInst.__addShadyScope = this.scopeSubtree.bind(this);
      }
      return mapInst;
    },

    addInst() {
      // @TODO: This is a shim for browsers without shadow DOM. We need to
      // re-append the `#map` element or it won't get the 'style-scope' CSS
      // classes needed to style it or its children. That's bad. When the
      // polyfill is updated or support is cut for browsers without shadow
      // DOM, this should be removed.
      if (this.isShadyScoped()) {
        this.scopeSubtree(this.$.map, true);
      }

      // Bind custom events for the map intance. Events will be unbound automatically.
      const mapMoveFn = this._handleMapMove.bind(this);
      const zoomStartFn = this._handleZoomStart.bind(this);
      const zoomEndFn = this._handleZoomEnd.bind(this);
      const mapLoadedFn = this._handleMapLoaded.bind(this);
      this.bindEvents({
        'moveend' : mapMoveFn,
        'zoomstart' : zoomStartFn,
        'zoomend' : zoomEndFn,
        'load': mapLoadedFn,
        'styledata': mapLoadedFn
      });
    },

    removeInst() {
      // Stop watching the shady root map element for changes
      if (this.isShadyScoped()) {
        this.scopeSubtree(this.$.map, false);
      }
    },


    getInstOptions() {
      const options = {};

      // Static options
      //options.zoomControl = false;
      options.container = '#map';

      // Dynamic options
      options.center = [this.lng, this.lat];
      options.style = this.style;
      options.zoom = this.zoom;
      options.bearing = this.bearing;
      options.pitch = this.pitch;
      options.minZoom = this.minZoom || 0;
      options.maxZoom = this.maxZoom || 18;
      //options.maxBounds = this.maxBounds || undefined;

      options.attributionControl = !this.disableAttributionControl;

      options.interactive = !this.disableInteraction;
      options.dragPan = !this.disableDragging;
      options.scrollZoom = !this.disableScrollZoom;
      options.touchZoomRotate = !this.disableTouchZoom;
      options.hash = !this.disableMapHash;

      return options;
    },

    updateInst(lastOptions, nextOptions) {
      console.log('Update Inst');
      console.log('lastOptions');
      console.log(lastOptions);
      console.log('nextOptions');
      console.log(nextOptions);
      if ((this.latLngIsValid(nextOptions.center[0], nextOptions.center[1])) &&
          (lastOptions.center[0] !== nextOptions.center[0] ||
          lastOptions.center[1] !== nextOptions.center[1] ||
          lastOptions.zoom !== nextOptions.zoom ||
          lastOptions.bearing !== nextOptions.bearing ||
          lastOptions.pitch !== nextOptions.pitch)) {
        console.log('updateMapView');
        this._updateMapView();
      }


      if (nextOptions.style != '' && lastOptions.style !== nextOptions.style) {
        //const layer = this.elementInst.getLayer('gj-symbol-layer-one');
        //console.log(layer);
        this.elementInst.setStyle(nextOptions.style);
        //this.elementInst.addLayer(layer);
      }

      if (lastOptions.maxZoom !== nextOptions.maxZoom && !isNaN(nextOptions.maxZoom)) {
        this.elementInst.setMaxZoom(nextOptions.maxZoom);
      }
      if (lastOptions.minZoom !== nextOptions.minZoom && !isNaN(nextOptions.minZoom)) {
        this.elementInst.setMinZoom(nextOptions.minZoom);
      }
      if (lastOptions.maxBounds !== nextOptions.maxBounds && !isNaN(nextOptions.maxBounds)) {
        this.setMaxBounds(nextOptions.maxBounds);
      }

      if (!lastOptions.interactive && nextOptions.interactive) {
        this.elementInst.boxZoom.enable();
        this.elementInst.dragPan.enable();
        this.elementInst.dragRotate.enable();
        this.elementInst.scrollZoom.enable();
        this.elementInst.keyboard.enable();
        this.elementInst.doubleClickZoom.enable();
        this.elementInst.touchZoomRotate.enable();
      }

      if (lastOptions.interactive && !nextOptions.interactive) {
        this.elementInst.boxZoom.disable();
        this.elementInst.dragPan.disable();
        this.elementInst.dragRotate.disable();
        this.elementInst.scrollZoom.disable();
        this.elementInst.keyboard.disable();
        this.elementInst.doubleClickZoom.disable();
        this.elementInst.touchZoomRotate.disable();
      }

      if (!lastOptions.dragging && nextOptions.dragging) {
        this.elementInst.dragPan.enable();
        this.elementInst.dragRotate.enable();
      }
      if (lastOptions.dragging && !nextOptions.dragging) {
        this.elementInst.dragPan.disable();
        this.elementInst.dragRotate.disable();
      }

      if (!lastOptions.scrollWheelZoom && nextOptions.scrollWheelZoom) {
        this.elementInst.scrollZoom.enable();
      }
      if (lastOptions.scrollWheelZoom && !nextOptions.scrollWheelZoom) {
        this.elementInst.scrollZoom.disable();
      }

      if (!lastOptions.touchZoom && nextOptions.touchZoom) {
        this.elementInst.touchZoomRotate.enable();
      }
      if (lastOptions.touchZoom && !nextOptions.touchZoom) {
        this.elementInst.touchZoomRotate.disable();
      }
    },

    /**
     * Called when the `lat`, `lng`, or `zoom` properties are set or updated.
     * Sets the map view to the new values.
     */
    _updateMapView() {
      if (!this.elementInst) return;

      this.debounce('update-map-view', function() {
        const {lng, lat} = this.elementInst.getCenter();
        const zoom = this.elementInst.getZoom();
        const bearing = this.elementInst.getBearing();
        const pitch = this.elementInst.getPitch();

        if (this.lat !== lat ||
            this.lng !== lng ||
            this.zoom !== zoom ||
            this.bearing !== bearing ||
            this.pitch !== pitch) {
         this.elementInst.flyTo({
            center: [this.lng, this.lat],
            zoom: this.zoom,
            pitch: this.pitch,
            bearing: this.bearing,
            speed: 1.2,
            curve: 1.42,
          });
        }
      });
    },

    /**
     * Returns true if val can be used as a number in L.LatLng
     *
     * @param {*} val
     * @return {Boolean}
     */
    _canBeNum(val) {
      return (!isNaN(val) && val !== "");
    },

    /**
     * Returns true if lat and lng are valid values that can be used to set a
     * map's position. Prints an error if values are invalid.
     *
     * @param {Number} lat
     * @param {Number} lng
     * @return {Boolean}
     */
    latLngIsValid(lat, lng) {
      var isValid = (typeof lat !== 'undefined' && this._canBeNum(lat)) && (typeof lng !== 'undefined' && this._canBeNum(lng));
      if (isValid) return true;
      console.log(`px-map-gl CONFIGURATION ERROR:
        You entered an invalid \`lat\` or \`lng\` attribute for ${this.is}. You must pass a valid number.`);
      return false;
    },

    _handleMapLoaded(e) {
      if (this.canAddInst()) {
        this.debounce('fire-load-events', function() {
            const ev_name = 'px-map-gl-root-' + e.type;
            console.log('fire ' + ev_name);
            this.fire(ev_name, this);
        }, 1000);
        // http://sdgo.io/2vczACj
        // Opt 1 - notify children here
        /*const children = this.getEffectiveChildren();
        for (let child of children) {
            child.fire('px-map-gl-element-loaded', this);
        }*/
      }
    },

    /**
     * Called when the map itself is moved (either by user interaction or by
     * some other method programmatically setting geometry properties).
     *
     * Syncs the new lat, lng, and zoom to the map's properties and notifies
     * out the result.
     */
    _handleMapMove() {
      if (this.__isZooming) {
        this.__onZoomEnd = this._handleMapMove.bind(this);
        return;
      }

      this.debounce('handle-map-move', function() {
        const latLng = this.elementInst.getCenter();
        const zoom = this.elementInst.getZoom();
        const bounds = this.elementInst.getBounds();
        const pitch = this.elementInst.getPitch();
        const bearing = this.elementInst.getBearing();

        if (this.lat !== latLng.lat || this.lng !== latLng.lng) {
          this.set('lat', latLng.lat);
          this.set('lng', latLng.lng);
        }
        if (this.zoom !== zoom) {
          this.set('zoom', zoom);
        }
        if (this.bearing !== bearing) {
          this.set('bearing', bearing);
        }
        if (this.pitch !== pitch) {
          this.set('pitch', pitch);
        }

        this.fire('px-map-gl-moved', {
          lat: latLng.lat,
          lng: latLng.lng,
          zoom: zoom,
          bounds: bounds
        });
      });
    },
    /**
     * Fired when the map's centerpoint (lat/lng) or zoom is changed by the user
     * or programatically.
     *
     *   * {Object} detail - Contains the event details
     *   * {Number} detail.lat - Latitude of the map centerpoint after moving
     *   * {Number} detail.lng - Longitude of the map centerpoint after moving
     *   * {Number} detail.zoom - Zoom level of the map after moving
     *   * {L.LatLngBouds} detail.bounds - Custom Leaflet object describing the visible bounds of the map as a rectangle
     *
     * @event px-map-gl-moved
     */

     /**
      * Sets an internal boolean that allows us to wait before handling any map
      * movements until the zoom animation is over.
      */
    _handleZoomStart() {
      this.__isZooming = true;
    },

    /**
     * Sets an internal boolean that allows us to wait before handling any map
     * movements until the zoom animation is over.
     */
    _handleZoomEnd() {
      this.__isZooming = false;
      if (typeof this.__onZoomEnd === 'function') {
        this.__onZoomEnd();
        this.__onZoomEnd = null;
      }
    },

    /**
     * Iterates over all markers attached to the map and returns an array of markers
     * that are within the visible bounds. Use to discover which markers the
     * user can currently see and change/filter the state of your app.
     *
     * This is an expensive operation, particularly for maps with many markers
     * (e.g. in a marker group). Only call it when necessary.
     *
     * To get continuous updates on which markers are visible, attach a
     * `px-map-gl-moved` event listener to this element and call this method
     * after each moved event.
     *
     * @return {Array}
     */
    getVisibleMarkers() {
      const mapBounds = this.elementInst.getBounds();
      let markers = [];

      // Loop over the layers
      this.elementInst.eachLayer((layer) => {
        // Most markers should have an `isMarker` static property defined as `true`
        // and a `getLatLng` method
        if (layer.isMarker && layer.getLatLng) {
          // Only push markers that are visible
          if (mapBounds.contains(layer.getLatLng()) && markers.indexOf(layer) === -1) {
            markers.push(layer);
          }
        }

        // Marker clusters have a `_markerCluster` key
        if (layer._markerCluster) {
          layer.eachLayer((marker) => {
            // Only push markers that are visible
            let parentCluster = layer.getVisibleParent(marker);
            if (parentCluster && mapBounds.contains(parentCluster.getLatLng()) && marker && markers.indexOf(marker) === -1) {
              markers.push(marker);
            }
          })
        }
      });

      return markers;
    }
  };
  /* Bind Popup behavior */
  /** @polymerBehavior */
  PxMapGlBehavior.MglRoot = [
    PxMapGlBehavior.Element,
    PxMapGlBehavior.MglRootImpl
  ];
})();
