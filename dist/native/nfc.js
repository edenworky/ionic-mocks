"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var NFCMock = /** @class */ (function () {
    function NFCMock() {
    }
    NFCMock.instance = function () {
        var instance = jasmine.createSpyObj('NFC', [
            'addNdefListener',
            'addTagDiscoveredListener',
            'addMimeTypeListener',
            'addNdefFormatableListener',
            'write',
            'makeReadyOnly',
            'share',
            'unshare',
            'erase',
            'handover',
            'stopHandover',
            'showSettings',
            'enabled',
            'bytesToString',
            'stringToBytes',
            'bytesToHexString'
        ]);
        instance.addNdefListener.and.returnValue(rxjs_1.EMPTY);
        instance.addTagDiscoveredListener.and.returnValue(rxjs_1.EMPTY);
        instance.addMimeTypeListener.and.returnValue(rxjs_1.EMPTY);
        instance.addNdefFormatableListener.and.returnValue(rxjs_1.EMPTY);
        instance.write.and.returnValue(rxjs_1.EMPTY);
        instance.makeReadyOnly.and.returnValue(rxjs_1.EMPTY);
        instance.share.and.returnValue(rxjs_1.EMPTY);
        instance.unshare.and.returnValue(rxjs_1.EMPTY);
        instance.erase.and.returnValue(rxjs_1.EMPTY);
        instance.handover.and.returnValue(rxjs_1.EMPTY);
        instance.stopHandover.and.returnValue(rxjs_1.EMPTY);
        instance.showSettings.and.returnValue(rxjs_1.EMPTY);
        instance.enabled.and.returnValue(rxjs_1.EMPTY);
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');
        return instance;
    };
    return NFCMock;
}());
exports.NFCMock = NFCMock;
//# sourceMappingURL=nfc.js.map