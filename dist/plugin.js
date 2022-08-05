var capacitorExample = (function (exports, core) {
    'use strict';

    (function (SupportedFormat) {
        // BEGIN 1D Product
        /**
         * Android only, UPC_A is part of EAN_13 according to Apple docs
         */
        SupportedFormat["UPC_A"] = "UPC_A";
        SupportedFormat["UPC_E"] = "UPC_E";
        /**
         * Android only
         */
        SupportedFormat["UPC_EAN_EXTENSION"] = "UPC_EAN_EXTENSION";
        SupportedFormat["EAN_8"] = "EAN_8";
        SupportedFormat["EAN_13"] = "EAN_13";
        // END 1D Product
        // BEGIN 1D Industrial
        SupportedFormat["CODE_39"] = "CODE_39";
        /**
         * iOS only
         */
        SupportedFormat["CODE_39_MOD_43"] = "CODE_39_MOD_43";
        SupportedFormat["CODE_93"] = "CODE_93";
        SupportedFormat["CODE_128"] = "CODE_128";
        /**
         * Android only
         */
        SupportedFormat["CODABAR"] = "CODABAR";
        SupportedFormat["ITF"] = "ITF";
        /**
         * iOS only
         */
        SupportedFormat["ITF_14"] = "ITF_14";
        // END 1D Industrial
        // BEGIN 2D
        SupportedFormat["AZTEC"] = "AZTEC";
        SupportedFormat["DATA_MATRIX"] = "DATA_MATRIX";
        /**
         * Android only
         */
        SupportedFormat["MAXICODE"] = "MAXICODE";
        SupportedFormat["PDF_417"] = "PDF_417";
        SupportedFormat["QR_CODE"] = "QR_CODE";
        /**
         * Android only
         */
        SupportedFormat["RSS_14"] = "RSS_14";
        /**
         * Android only
         */
        SupportedFormat["RSS_EXPANDED"] = "RSS_EXPANDED";
        // END 2D
    })(exports.SupportedFormat || (exports.SupportedFormat = {}));
    (function (CameraDirection) {
        CameraDirection["FRONT"] = "front";
        CameraDirection["BACK"] = "back";
    })(exports.CameraDirection || (exports.CameraDirection = {}));

    const BarcodeScanner = core.registerPlugin('BarcodeScanner', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BarcodeScannerWeb()),
    });

    class BarcodeScannerWeb extends core.WebPlugin {
        async prepare() {
            throw this.unimplemented('Not implemented on web.');
        }
        async hideBackground() {
            throw this.unimplemented('Not implemented on web.');
        }
        async showBackground() {
            throw this.unimplemented('Not implemented on web.');
        }
        async startScan(_options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async startScanning(_options, _callback) {
            throw this.unimplemented('Not implemented on web.');
        }
        async pauseScanning() {
            throw this.unimplemented('Not implemented on web.');
        }
        async resumeScanning() {
            throw this.unimplemented('Not implemented on web.');
        }
        async stopScan(_options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async checkPermission(_options) {
            throw this.unimplemented('Not implemented on web.');
        }
        async openAppSettings() {
            throw this.unimplemented('Not implemented on web.');
        }
        async disableTorch() {
            throw this.unimplemented('Not implemented on web.');
        }
        async enableTorch() {
            throw this.unimplemented('Not implemented on web.');
        }
        async toggleTorch() {
            throw this.unimplemented('Not implemented on web.');
        }
        async getTorchState() {
            throw this.unimplemented('Not implemented on web.');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BarcodeScannerWeb: BarcodeScannerWeb
    });

    exports.BarcodeScanner = BarcodeScanner;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
