"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NodeCount = _interopRequireDefault(require("../model/NodeCount"));

var _RequestPreset = _interopRequireDefault(require("../model/RequestPreset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* NodeApi service.
* @module api/NodeApi
* @version 1.0
*/
var NodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NodeApi. 
  * @alias module:api/NodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NodeApi(apiClient) {
    _classCallCheck(this, NodeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Node counts
   * Returns total,busy and free node counts
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.browserName 
   * @param {String} opts.browserVersion 
   * @param {module:model/String} opts.platformName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NodeCount} and HTTP response
   */


  _createClass(NodeApi, [{
    key: "countWithHttpInfo",
    value: function countWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'browserName': opts['browserName'],
        'browserVersion': opts['browserVersion'],
        'platformName': opts['platformName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['BasicAuth'];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _NodeCount["default"];
      return this.apiClient.callApi('/node/count', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Node counts
     * Returns total,busy and free node counts
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.browserName 
     * @param {String} opts.browserVersion 
     * @param {module:model/String} opts.platformName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeCount}
     */

  }, {
    key: "count",
    value: function count(opts) {
      return this.countWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Pre-launch nodes
     * pre-launch nodes
     * @param {module:model/RequestPreset} requestPreset array of pre-launch parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */

  }, {
    key: "presetWithHttpInfo",
    value: function presetWithHttpInfo(requestPreset) {
      var postBody = requestPreset; // verify the required parameter 'requestPreset' is set

      if (requestPreset === undefined || requestPreset === null) {
        throw new Error("Missing the required parameter 'requestPreset' when calling preset");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['BasicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/node/preset', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Pre-launch nodes
     * pre-launch nodes
     * @param {module:model/RequestPreset} requestPreset array of pre-launch parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */

  }, {
    key: "preset",
    value: function preset(requestPreset) {
      return this.presetWithHttpInfo(requestPreset).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NodeApi;
}();

exports["default"] = NodeApi;