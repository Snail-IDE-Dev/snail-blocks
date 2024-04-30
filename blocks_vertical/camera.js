'use strict';

goog.provide('Blockly.Blocks.dialogs'); // "dialogs" being the category.

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['camera_setpos'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "set position of camera to x %1 y %2", 
        "args0": [
          {
            "type": "input_value",
            "name": "XPOS"
          },
          {
            "type": "input_value",
            "name": "YPOS"
          },
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['camera_changepos'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "change position of camera by x %1 y %2", 
        "args0": [
          {
            "type": "input_value",
            "name": "XPOS"
          },
          {
            "type": "input_value",
            "name": "YPOS"
          },
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['camera_setx'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "set camera x to %1", 
        "args0": [
          {
            "type": "input_value",
            "name": "XPOS"
          }
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['camera_sety'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "set camera y to %1", 
        "args0": [
          {
            "type": "input_value",
            "name": "YPOS"
          }
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['camera_changex'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "change camera x by %1", 
        "args0": [
          {
            "type": "input_value",
            "name": "XPOS"
          }
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };

  Blockly.Blocks['camera_changey'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
      this.jsonInit({
        "message0": "change camera y by %1", 
        "args0": [
          {
            "type": "input_value",
            "name": "YPOS"
          }
        ],
        "category": Blockly.Categories.camera,
        "extensions": ["colours_camera", "shape_statement"]
      });
    }
  };