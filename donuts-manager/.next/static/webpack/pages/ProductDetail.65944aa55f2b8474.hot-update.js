"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ProductDetail",{

/***/ "./src/components/DonutsListComponent/DonutsDetailComponent/EditDonutsDetailComponent.jsx":
/*!************************************************************************************************!*\
  !*** ./src/components/DonutsListComponent/DonutsDetailComponent/EditDonutsDetailComponent.jsx ***!
  \************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditDonutsDetailComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_apiFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/apiFetch */ \"./src/api/apiFetch.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EditDonutsDetailComponent(props) {\n    _s();\n    const { id } = props;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [donut, setDonut] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [errorMsg, setErrorMsg] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const loadDonut = async ()=>{\n            const donutAux = await (0,_api_apiFetch__WEBPACK_IMPORTED_MODULE_1__.getDonutById)(id);\n            setDonut(donutAux.data);\n        };\n        loadDonut();\n    }, []);\n    const validationSchemaYup = (0,yup__WEBPACK_IMPORTED_MODULE_4__.object)({\n        nombre: (0,yup__WEBPACK_IMPORTED_MODULE_4__.string)().required(\"El nombre es requerido\").min(4, \"Debe tener 4 caracteres m\\xednimo\").max(15, \"M\\xe1ximo 15 caracteres\"),\n        precio: (0,yup__WEBPACK_IMPORTED_MODULE_4__.number)().positive(),\n        sabor: (0,yup__WEBPACK_IMPORTED_MODULE_4__.string)().min(4, \"Debe tener 4 caracteres m\\xednimo\").max(20, \"M\\xe1ximo 20 caracteres\")\n    });\n    const saveDonut = async (values)=>{\n        const updatedDonut = {};\n        if (values.nombre !== donut.nombre) {\n            updatedDonut.nombre = values.nombre;\n        }\n        if (values.precio != donut.precio) {\n            updatedDonut.precio = values.precio;\n        }\n        if (values.sabor !== donut.sabor) {\n            updatedDonut.sabor = values.sabor;\n        }\n        if (updatedDonut.precio >= 3.33 || !updatedDonut.precio) {\n            await (0,_api_apiFetch__WEBPACK_IMPORTED_MODULE_1__.updateDonut)(id, JSON.stringify(updatedDonut));\n            router.push(\"/DonutsList\");\n        } else {\n            setError(true);\n            setErrorMsg(\"El precio minimo es de 3.33€\");\n        }\n    };\n    const handleBackToDetail = ()=>{\n        router.push(\"/DonutsList\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"editor-title\",\n                children: \"Editor de productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"edit-formik\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Formik, {\n                        initialValues: {\n                            nombre: donut.nombre,\n                            precio: donut.precio,\n                            sabor: donut.sabor\n                        },\n                        onSubmit: (values)=>saveDonut(values),\n                        validationSchema: validationSchemaYup,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"eachField\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Nombre: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                            className: \"fields\",\n                                            name: \"nombre\",\n                                            type: \"text\",\n                                            placeholder: \"Nombre...\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {\n                                            name: \"nombre\",\n                                            component: \"div\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"eachField\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Precio: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                            className: \"fields\",\n                                            name: \"precio\",\n                                            type: \"number\",\n                                            placeholder: \"Precio...\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {\n                                            name: \"precio\",\n                                            component: \"div\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"eachField\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Sabor: \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.Field, {\n                                            className: \"fields\",\n                                            name: \"sabor\",\n                                            type: \"text\",\n                                            placeholder: \"Sabor...\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_5__.ErrorMessage, {\n                                            name: \"sabor\",\n                                            component: \"div\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"editor-buttons\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"editor-btn\",\n                                            type: \"submit\",\n                                            children: \"Guardar cambios\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"editor-btn\",\n                                            onClick: handleBackToDetail,\n                                            children: \"Volver\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"error\",\n                        children: error ? errorMsg : null\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"warning\",\n                        children: \"*El precio de las Donuts personalizadas es de m\\xednimo 3.33€\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ander\\\\Desktop\\\\fullstack-react\\\\Practica - ReactJs Avanzado\\\\donuts-manager\\\\src\\\\components\\\\DonutsListComponent\\\\DonutsDetailComponent\\\\EditDonutsDetailComponent.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(EditDonutsDetailComponent, \"6LPnhAeAdAATLu8fzPOCcexBec8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditDonutsDetailComponent;\nvar _c;\n$RefreshReg$(_c, \"EditDonutsDetailComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb251dHNMaXN0Q29tcG9uZW50L0RvbnV0c0RldGFpbENvbXBvbmVudC9FZGl0RG9udXRzRGV0YWlsQ29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDQTtBQUNuQjtBQUNVO0FBQ047QUFFN0IsU0FBU2EsMEJBQTBCQyxLQUFLOztJQUVyRCxNQUFNLEVBQUVDLEVBQUUsRUFBRSxHQUFHRDtJQUNmLE1BQU1FLFNBQVNWLHNEQUFTQTtJQUV4QixNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUUsQ0FBQztJQUNyQyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXpDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFlBQVk7WUFDaEIsTUFBTUMsV0FBVyxNQUFNeEIsMkRBQVlBLENBQUNlO1lBQ3BDRyxTQUFTTSxTQUFTQyxJQUFJO1FBQ3hCO1FBQ0FGO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUcsc0JBQXNCZiwyQ0FBTUEsQ0FBQztRQUNqQ2dCLFFBQVFmLDJDQUFNQSxHQUNYZ0IsUUFBUSxDQUFDLDBCQUNUQyxHQUFHLENBQUMsR0FBRyxxQ0FDUEMsR0FBRyxDQUFDLElBQUk7UUFDWEMsUUFBUXJCLDJDQUFNQSxHQUNYc0IsUUFBUTtRQUNYQyxPQUFPckIsMkNBQU1BLEdBQ1ZpQixHQUFHLENBQUMsR0FBRyxxQ0FDUEMsR0FBRyxDQUFDLElBQUk7SUFDYjtJQUVBLE1BQU1JLFlBQVksT0FBT0M7UUFDdkIsTUFBTUMsZUFBZSxDQUFDO1FBRXRCLElBQUlELE9BQU9SLE1BQU0sS0FBS1YsTUFBTVUsTUFBTSxFQUFFO1lBQ2xDUyxhQUFhVCxNQUFNLEdBQUdRLE9BQU9SLE1BQU07UUFDckM7UUFFQSxJQUFJUSxPQUFPSixNQUFNLElBQUlkLE1BQU1jLE1BQU0sRUFBRTtZQUNqQ0ssYUFBYUwsTUFBTSxHQUFHSSxPQUFPSixNQUFNO1FBQ3JDO1FBRUEsSUFBSUksT0FBT0YsS0FBSyxLQUFLaEIsTUFBTWdCLEtBQUssRUFBRTtZQUNoQ0csYUFBYUgsS0FBSyxHQUFHRSxPQUFPRixLQUFLO1FBQ25DO1FBRUEsSUFBSUcsYUFBYUwsTUFBTSxJQUFJLFFBQVEsQ0FBQ0ssYUFBYUwsTUFBTSxFQUFFO1lBQ3ZELE1BQU05QiwwREFBV0EsQ0FBQ2MsSUFBSXNCLEtBQUtDLFNBQVMsQ0FBQ0Y7WUFDckNwQixPQUFPdUIsSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMbkIsU0FBUztZQUNURSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLE1BQU1rQixxQkFBcUI7UUFDekJ4QixPQUFPdUIsSUFBSSxDQUFFO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBZTs7Ozs7OzBCQUM3Qiw4REFBQ0Y7Z0JBQUlFLFdBQVk7O2tDQUNmLDhEQUFDdEMsMENBQU1BO3dCQUFDdUMsZUFBZTs0QkFDckJqQixRQUFRVixNQUFNVSxNQUFNOzRCQUNwQkksUUFBUWQsTUFBTWMsTUFBTTs0QkFDcEJFLE9BQU9oQixNQUFNZ0IsS0FBSzt3QkFDcEI7d0JBQ0FZLFVBQVUsQ0FBQ1YsU0FBV0QsVUFBVUM7d0JBQ2hDVyxrQkFBa0JwQjtrQ0FFaEIsNEVBQUN0Qix3Q0FBSUE7OzhDQUNILDhEQUFDcUM7b0NBQUlFLFdBQVU7O3NEQUNiLDhEQUFDSTtzREFBSzs7Ozs7O3NEQUNOLDhEQUFDNUMseUNBQUtBOzRDQUFDd0MsV0FBVTs0Q0FBU0ssTUFBSzs0Q0FBU0MsTUFBSzs0Q0FBT0MsYUFBWTs7Ozs7O3NEQUNoRSw4REFBQ2hELGdEQUFZQTs0Q0FBQzhDLE1BQUs7NENBQVNHLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFeEMsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ1g7b0NBQUlFLFdBQVU7O3NEQUNiLDhEQUFDSTtzREFBSzs7Ozs7O3NEQUNOLDhEQUFDNUMseUNBQUtBOzRDQUFDd0MsV0FBVTs0Q0FBU0ssTUFBSzs0Q0FBU0MsTUFBSzs0Q0FBU0MsYUFBWTs7Ozs7O3NEQUNsRSw4REFBQ2hELGdEQUFZQTs0Q0FBQzhDLE1BQUs7NENBQVNHLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFeEMsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ1g7b0NBQUlFLFdBQVU7O3NEQUNiLDhEQUFDSTtzREFBSzs7Ozs7O3NEQUNOLDhEQUFDNUMseUNBQUtBOzRDQUFDd0MsV0FBVTs0Q0FBU0ssTUFBSzs0Q0FBUUMsTUFBSzs0Q0FBT0MsYUFBWTs7Ozs7O3NEQUMvRCw4REFBQ2hELGdEQUFZQTs0Q0FBQzhDLE1BQUs7NENBQVFHLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FFdkMsOERBQUNDOzs7Ozs4Q0FDRCw4REFBQ1g7b0NBQUlFLFdBQVU7O3NEQUNiLDhEQUFDVTs0Q0FBT1YsV0FBVTs0Q0FBYU0sTUFBSztzREFBUzs7Ozs7O3NEQUM3Qyw4REFBQ0k7NENBQU9WLFdBQVU7NENBQWFXLFNBQVNkO3NEQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWxFLDhEQUFDTzt3QkFBS0osV0FBVTtrQ0FBU3hCLFFBQVFFLFdBQVc7Ozs7OztrQ0FDNUMsOERBQUMwQjt3QkFBS0osV0FBVTtrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxDO0dBbkd3QjlCOztRQUdQUCxrREFBU0E7OztLQUhGTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Eb251dHNMaXN0Q29tcG9uZW50L0RvbnV0c0RldGFpbENvbXBvbmVudC9FZGl0RG9udXRzRGV0YWlsQ29tcG9uZW50LmpzeD81MDY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERvbnV0QnlJZCwgdXBkYXRlRG9udXQgfSBmcm9tICdAL2FwaS9hcGlGZXRjaCc7XHJcbmltcG9ydCB7IEVycm9yTWVzc2FnZSwgRmllbGQsIEZvcm0sIEZvcm1payB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbnVtYmVyLCBvYmplY3QsIHN0cmluZyB9IGZyb20gJ3l1cCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXREb251dHNEZXRhaWxDb21wb25lbnQocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgeyBpZCB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFtkb251dCwgc2V0RG9udXRdID0gdXNlU3RhdGUgKHt9KTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZERvbnV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb251dEF1eCA9IGF3YWl0IGdldERvbnV0QnlJZChpZCk7XHJcbiAgICAgIHNldERvbnV0KGRvbnV0QXV4LmRhdGEpO1xyXG4gICAgfVxyXG4gICAgbG9hZERvbnV0KCk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWFZdXAgPSBvYmplY3Qoe1xyXG4gICAgbm9tYnJlOiBzdHJpbmcoKVxyXG4gICAgICAucmVxdWlyZWQoXCJFbCBub21icmUgZXMgcmVxdWVyaWRvXCIpXHJcbiAgICAgIC5taW4oNCwgXCJEZWJlIHRlbmVyIDQgY2FyYWN0ZXJlcyBtw61uaW1vXCIpXHJcbiAgICAgIC5tYXgoMTUsIFwiTcOheGltbyAxNSBjYXJhY3RlcmVzXCIpLFxyXG4gICAgcHJlY2lvOiBudW1iZXIoKVxyXG4gICAgICAucG9zaXRpdmUoKSxcclxuICAgIHNhYm9yOiBzdHJpbmcoKVxyXG4gICAgICAubWluKDQsIFwiRGViZSB0ZW5lciA0IGNhcmFjdGVyZXMgbcOtbmltb1wiKVxyXG4gICAgICAubWF4KDIwLCBcIk3DoXhpbW8gMjAgY2FyYWN0ZXJlc1wiKSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2F2ZURvbnV0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZERvbnV0ID0ge307XHJcblxyXG4gICAgaWYgKHZhbHVlcy5ub21icmUgIT09IGRvbnV0Lm5vbWJyZSkge1xyXG4gICAgICB1cGRhdGVkRG9udXQubm9tYnJlID0gdmFsdWVzLm5vbWJyZTtcclxuICAgIH1cclxuICBcclxuICAgIGlmICh2YWx1ZXMucHJlY2lvICE9IGRvbnV0LnByZWNpbykge1xyXG4gICAgICB1cGRhdGVkRG9udXQucHJlY2lvID0gdmFsdWVzLnByZWNpbztcclxuICAgIH1cclxuICBcclxuICAgIGlmICh2YWx1ZXMuc2Fib3IgIT09IGRvbnV0LnNhYm9yKSB7XHJcbiAgICAgIHVwZGF0ZWREb251dC5zYWJvciA9IHZhbHVlcy5zYWJvcjtcclxuICAgIH1cclxuICBcclxuICAgIGlmICh1cGRhdGVkRG9udXQucHJlY2lvID49IDMuMzMgfHwgIXVwZGF0ZWREb251dC5wcmVjaW8pIHtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9udXQoaWQsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWREb251dCkpO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9Eb251dHNMaXN0XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICAgIHNldEVycm9yTXNnKFwiRWwgcHJlY2lvIG1pbmltbyBlcyBkZSAzLjMz4oKsXCIpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja1RvRGV0YWlsID0gKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2goYC9Eb251dHNMaXN0YClcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT0nZWRpdG9yLXRpdGxlJz5FZGl0b3IgZGUgcHJvZHVjdG9zPC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImVkaXQtZm9ybWlrXCI+XHJcbiAgICAgICAgPEZvcm1payBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBub21icmU6IGRvbnV0Lm5vbWJyZSxcclxuICAgICAgICAgIHByZWNpbzogZG9udXQucHJlY2lvLFxyXG4gICAgICAgICAgc2Fib3I6IGRvbnV0LnNhYm9yXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4gc2F2ZURvbnV0KHZhbHVlcyl9XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYVl1cH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VhY2hGaWVsZCc+IFxyXG4gICAgICAgICAgICAgIDxzcGFuPk5vbWJyZTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWU9XCJmaWVsZHNcIiBuYW1lPVwibm9tYnJlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWJyZS4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwibm9tYnJlXCIgY29tcG9uZW50PVwiZGl2XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlYWNoRmllbGQnPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlByZWNpbzogPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBjbGFzc05hbWU9XCJmaWVsZHNcIiBuYW1lPVwicHJlY2lvXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUHJlY2lvLi4uXCIgLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwcmVjaW9cIiBjb21wb25lbnQ9XCJkaXZcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2VhY2hGaWVsZCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2Fib3I6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8RmllbGQgY2xhc3NOYW1lPVwiZmllbGRzXCIgbmFtZT1cInNhYm9yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNhYm9yLi4uXCIgLz5cclxuICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJzYWJvclwiIGNvbXBvbmVudD1cImRpdlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWRpdG9yLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlZGl0b3ItYnRuJyB0eXBlPSdzdWJtaXQnPkd1YXJkYXIgY2FtYmlvczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdlZGl0b3ItYnRuJyBvbkNsaWNrPXtoYW5kbGVCYWNrVG9EZXRhaWx9PlZvbHZlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Vycm9yJz57ZXJyb3IgPyBlcnJvck1zZyA6IG51bGx9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nd2FybmluZyc+KkVsIHByZWNpbyBkZSBsYXMgRG9udXRzIHBlcnNvbmFsaXphZGFzIGVzIGRlIG3DrW5pbW8gMy4zM+KCrDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImdldERvbnV0QnlJZCIsInVwZGF0ZURvbnV0IiwiRXJyb3JNZXNzYWdlIiwiRmllbGQiLCJGb3JtIiwiRm9ybWlrIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsIkVkaXREb251dHNEZXRhaWxDb21wb25lbnQiLCJwcm9wcyIsImlkIiwicm91dGVyIiwiZG9udXQiLCJzZXREb251dCIsImVycm9yIiwic2V0RXJyb3IiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwibG9hZERvbnV0IiwiZG9udXRBdXgiLCJkYXRhIiwidmFsaWRhdGlvblNjaGVtYVl1cCIsIm5vbWJyZSIsInJlcXVpcmVkIiwibWluIiwibWF4IiwicHJlY2lvIiwicG9zaXRpdmUiLCJzYWJvciIsInNhdmVEb251dCIsInZhbHVlcyIsInVwZGF0ZWREb251dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiaGFuZGxlQmFja1RvRGV0YWlsIiwiZGl2IiwiaDMiLCJjbGFzc05hbWUiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWxpZGF0aW9uU2NoZW1hIiwic3BhbiIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjb21wb25lbnQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DonutsListComponent/DonutsDetailComponent/EditDonutsDetailComponent.jsx\n"));

/***/ })

});