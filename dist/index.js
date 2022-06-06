"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractView = exports.ContractSign = exports.ContractEditor = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var moment = require('moment'); // const endURL = "http://localhost:3001";


var endURL = "https://www.contracter.io";

var ContractEditor = function ContractEditor(props) {
  var url = endURL + "/editor/edit?PK=" + props?.publishKey + "&subAccountSID=" + props?.subAccountSID + "&id=" + props?.id + "&color=" + props?.color + "&type=" + props?.type + "&fileURL=" + encodeURIComponent(props?.fileURL) + "&tags=" + encodeURIComponent(JSON.stringify(props?.tags)) + "&r=" + moment().unix(); // useEffect((e) => {

  window.addEventListener("message", function (event) {
    try {
      var data = JSON.parse(event.data);

      if (data?.type == "onSave" && props?.onSave) {
        props?.onSave(data?.data);
      }
    } catch (e) {}
  }, false); // },[])

  return /*#__PURE__*/_react["default"].createElement("iframe", {
    src: url,
    style: {
      width: "100%",
      height: "100%",
      border: "1"
    }
  });
};

exports.ContractEditor = ContractEditor;

var ContractSign = function ContractSign(props) {
  var url = endURL + "/editor/sign/" + props?.contractKey + "/?PK=" + props?.publishKey + "&tags=" + encodeURIComponent(JSON.stringify(props?.tags)); // useEffect((e)=>{

  window.addEventListener("message", function (event) {
    try {
      var data = JSON.parse(event.data);

      if (data?.type == "onSubmit" && props?.onSubmit) {
        props?.onSubmit(data?.data);
      }
    } catch (e) {}
  }, false); // },[])

  return /*#__PURE__*/_react["default"].createElement("iframe", {
    src: url,
    style: {
      width: "100%",
      height: "100%",
      border: "1"
    }
  });
};

exports.ContractSign = ContractSign;

var ContractView = function ContractView(props) {
  var url = endURL + "/editor/view?PK=" + props?.publishKey + "&subAccountSID=" + props?.subAccountSID + "&id=" + props?.id + "&color=" + props?.color + "&r=" + moment().unix();
  return /*#__PURE__*/_react["default"].createElement("iframe", {
    src: url,
    style: {
      width: "100%",
      height: "100%",
      border: "1"
    }
  });
};

exports.ContractView = ContractView;
