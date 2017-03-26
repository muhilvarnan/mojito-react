/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('layout', function(Y, NAME) {

/**
 * The layout module.
 *
 * @module layout
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.composite.done();
        },
        edit: function(ac) {
            ac.composite.done();
        },
        preview: function(ac) {
            ac.composite.done();
        },
        form_builder: function(ac) {
            ac.composite.done({});
        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'mojito-composite-addon', 'mojito-assets-addon']});
