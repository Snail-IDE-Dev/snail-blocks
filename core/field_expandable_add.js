/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Checkbox field.  Checked or not checked.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldExpandableAdd');

goog.require('Blockly.Field');


/**
 * Class for a button field.
 * @param {object} state Unused.
 * @param {Function=} opt_validator A function that is executed.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldExpandableAdd = function(_, opt_validator) {
  Blockly.FieldExpandableAdd.superClass_.constructor.call(this, '', opt_validator);
  this.addArgType('button');
};
goog.inherits(Blockly.FieldExpandableAdd, Blockly.Field);

/**
 * Construct a FieldExpandableAdd from a JSON arg object.
 * @param {!Object} options A JSON object with options.
 * @returns {!Blockly.FieldExpandableAdd} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldExpandableAdd.fromJson = function(options) {
  return new Blockly.FieldExpandableAdd(options);
};

/**
 * Mouse cursor style when over the button.
 */
Blockly.FieldExpandableAdd.prototype.CURSOR = 'pointer';

/**
 * Install this checkbox on a block.
 */
Blockly.FieldExpandableAdd.prototype.init = function() {
  if (this.fieldGroup_) {
    // Checkbox has already been initialized once.
    return;
  }
  Blockly.FieldExpandableAdd.superClass_.init.call(this);

  this.box_ = Blockly.utils.createSvgElement('rect',
    {
      'x': 0,
      'y': 0,
      'rx': 4,
      'ry': 4,
      'width': this.size_.width,
      'height': this.size_.height,
      'fill': "#00ff00",
      'stroke': "rgba(0, 0, 0, 0.25)",
      'cursor': this.CURSOR
    }
  );
  this.fieldGroup_.insertBefore(this.box_, this.textElement_);
  // var textNode = document.createTextNode(this.label_);
  // textNode.style.fill = "#ffffff";
  // this.textElement_.append(textNode);
  // this.fieldGroup_.append(this.textElement_);
};

/**
 * Returns an empty string.
 * @return {string}
 */
Blockly.FieldExpandableAdd.prototype.getValue = function() {
  return '';
};

/**
 * Triggers when the button is clicked.
 * @private
 */
Blockly.FieldExpandableAdd.prototype.showEditor_ = function() {
  // true is add
  // false is remove
  this.sourceBlock_.onExpandableButtonClicked_(true);
};

Blockly.Field.register('field_expandable_add', Blockly.FieldExpandableAdd);