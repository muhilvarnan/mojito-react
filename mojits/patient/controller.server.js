/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('patient', function(Y, NAME) {

/**
 * The patient module.
 *
 * @module patient
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
            ac.done();
        },

        formRender: function(ac) {
          ac.done([
            {
              label:"Section 1",
              id:"12",
              fields:[
                {
                  type:"TextFieldGroup",
                  label:"First Name",
                  colSm:12,
                  name:"safsd",
                  fieldType:"text",
                  placeholder:"Enter First Name"
                }
              ]
            },
            {
              label:"Section 2",
              id:"34",
              fields:[
                {
                  type:"DropDownFieldGroup",
                  label:"Select Gender",
                  colSm:12,
                  name:"asdasd",
                  selectText:"Please Select",
                  options:[
                    {
                      id:1,
                      value:"wwd"
                    },
                    {
                      id:2,
                      value:"wwdsdf"
                    }
                  ]
                }
              ]
            }
          ], 'json');
        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon']});
