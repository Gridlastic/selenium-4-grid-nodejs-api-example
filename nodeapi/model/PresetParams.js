"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PresetParams model module.
 * @module model/PresetParams
 * @version 1.0
 */
var PresetParams = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PresetParams</code>.
   * @alias module:model/PresetParams
   * @param browserName {module:model/PresetParams.BrowserNameEnum} browser name
   * @param browserVersion {String} 
   * @param platformName {module:model/PresetParams.PlatformNameEnum} platform name
   * @param count {Number} 
   */
  function PresetParams(browserName, browserVersion, platformName, count) {
    _classCallCheck(this, PresetParams);

    PresetParams.initialize(this, browserName, browserVersion, platformName, count);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PresetParams, null, [{
    key: "initialize",
    value: function initialize(obj, browserName, browserVersion, platformName, count) {
      obj['browserName'] = browserName;
      obj['browserVersion'] = browserVersion;
      obj['platformName'] = platformName;
      obj['count'] = count;
    }
    /**
     * Constructs a <code>PresetParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PresetParams} obj Optional instance to populate.
     * @return {module:model/PresetParams} The populated <code>PresetParams</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PresetParams();

        if (data.hasOwnProperty('browserName')) {
          obj['browserName'] = _ApiClient["default"].convertToType(data['browserName'], 'String');
        }

        if (data.hasOwnProperty('browserVersion')) {
          obj['browserVersion'] = _ApiClient["default"].convertToType(data['browserVersion'], 'String');
        }

        if (data.hasOwnProperty('platformName')) {
          obj['platformName'] = _ApiClient["default"].convertToType(data['platformName'], 'String');
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PresetParams;
}();
/**
 * browser name
 * @member {module:model/PresetParams.BrowserNameEnum} browserName
 */


PresetParams.prototype['browserName'] = undefined;
/**
 * @member {String} browserVersion
 */

PresetParams.prototype['browserVersion'] = undefined;
/**
 * platform name
 * @member {module:model/PresetParams.PlatformNameEnum} platformName
 */

PresetParams.prototype['platformName'] = undefined;
/**
 * @member {Number} count
 */

PresetParams.prototype['count'] = undefined;
/**
 * Allowed values for the <code>browserName</code> property.
 * @enum {String}
 * @readonly
 */

PresetParams['BrowserNameEnum'] = {
  /**
   * value: "chrome"
   * @const
   */
  "chrome": "chrome",

  /**
   * value: "firefox"
   * @const
   */
  "firefox": "firefox",

  /**
   * value: "MicrosoftEdge"
   * @const
   */
  "MicrosoftEdge": "MicrosoftEdge"
};
/**
 * Allowed values for the <code>platformName</code> property.
 * @enum {String}
 * @readonly
 */

PresetParams['PlatformNameEnum'] = {
  /**
   * value: "win10"
   * @const
   */
  "win10": "win10",

  /**
   * value: "win11"
   * @const
   */
  "win11": "win11",

  /**
   * value: "linux"
   * @const
   */
  "linux": "linux"
};
var _default = PresetParams;
exports["default"] = _default;