"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var App = function () {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Hello World"),
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "This is cool!")));
};
exports.App = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "700",
        color: "white",
        fontSize: 18,
    },
});
