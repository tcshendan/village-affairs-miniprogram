"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var AttentionModel = (function (_super) {
    __extends(AttentionModel, _super);
    function AttentionModel() {
        return _super.call(this) || this;
    }
    AttentionModel.prototype.getPartyWorkList = function () {
        return this.request({
            url: '/getPartyWorkList'
        });
    };
    return AttentionModel;
}(request_1.default));
exports.default = AttentionModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW50aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0ZW50aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFzQztBQWV0QztJQUE0QyxrQ0FBTztJQUNqRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUUsbUJBQW1CO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUFYRCxDQUE0QyxpQkFBTyxHQVdsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0eVdvcmtJdGVtRGF0YSB7XHJcbiAgbGlzdHN0eWxlOiBudW1iZXIsXHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgbmFtZT86IHN0cmluZyxcclxuICB0aXRsZVRleHQ/OiBzdHJpbmdcclxuICB0eXBlOiBzdHJpbmcsXHJcbiAgZGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnR5V29ya0xpc3REYXRhIHtcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IElQYXJ0eVdvcmtJdGVtRGF0YVtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGVudGlvbk1vZGVsIGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBnZXRQYXJ0eVdvcmtMaXN0KCk6IFByb21pc2U8SVBhcnR5V29ya0xpc3REYXRhPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2dldFBhcnR5V29ya0xpc3QnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbn0iXX0=