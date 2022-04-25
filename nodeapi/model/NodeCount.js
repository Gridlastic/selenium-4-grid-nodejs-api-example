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
 * The NodeCount model module.
 * @module model/NodeCount
 * @version 1.0
 */
var NodeCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeCount</code>.
   * @alias module:model/NodeCount
   */
  function NodeCount() {
    _classCallCheck(this, NodeCount);

    NodeCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeCount} obj Optional instance to populate.
     * @return {module:model/NodeCount} The populated <code>NodeCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeCount();

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('busy')) {
          obj['busy'] = _ApiClient["default"].convertToType(data['busy'], 'Number');
        }

        if (data.hasOwnProperty('free')) {
          obj['free'] = _ApiClient["default"].convertToType(data['free'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return NodeCount;
}();
/**
 * @member {Number} total
 */


NodeCount.prototype['total'] = undefined;
/**
 * @member {Number} busy
 */

NodeCount.prototype['busy'] = undefined;
/**
 * @member {Number} free
 */

NodeCount.prototype['free'] = undefined;
var _default = NodeCount;
exports["default"] = _default;