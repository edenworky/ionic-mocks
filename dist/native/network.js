"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var NetworkMock = /** @class */ (function () {
    function NetworkMock() {
    }
    NetworkMock.instance = function (networkType) {
        var instance = jasmine.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onChange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(rxjs_1.EMPTY);
        instance.onDisconnect.and.returnValue(rxjs_1.EMPTY);
        instance.onConnect.and.returnValue(rxjs_1.EMPTY);
        return instance;
    };
    return NetworkMock;
}());
exports.NetworkMock = NetworkMock;
//# sourceMappingURL=network.js.map