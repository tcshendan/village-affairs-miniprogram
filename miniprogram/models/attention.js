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
    AttentionModel.prototype.getVillageWorkList = function () {
        return this.request({
            url: '/getVillageWorkList'
        });
    };
    AttentionModel.prototype.getFinanceWorkList = function () {
        return this.request({
            url: '/getFinanceWorkList'
        });
    };
    return AttentionModel;
}(request_1.default));
exports.default = AttentionModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW50aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXR0ZW50aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFzQztBQWV0QztJQUE0QyxrQ0FBTztJQUNqRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUUsbUJBQW1CO1NBQ3pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLHFCQUFxQjtTQUMzQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxxQkFBcUI7U0FDM0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRCRCxDQUE0QyxpQkFBTyxHQXNCbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydHlXb3JrSXRlbURhdGEge1xyXG4gIGxpc3RzdHlsZTogbnVtYmVyLFxyXG4gIHRpdGxlPzogc3RyaW5nLFxyXG4gIG5hbWU/OiBzdHJpbmcsXHJcbiAgdGl0bGVUZXh0Pzogc3RyaW5nXHJcbiAgdHlwZTogc3RyaW5nLFxyXG4gIGRhdGU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0eVdvcmtMaXN0RGF0YSB7XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBJUGFydHlXb3JrSXRlbURhdGFbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRlbnRpb25Nb2RlbCBleHRlbmRzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFydHlXb3JrTGlzdCgpOiBQcm9taXNlPElQYXJ0eVdvcmtMaXN0RGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9nZXRQYXJ0eVdvcmtMaXN0J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFZpbGxhZ2VXb3JrTGlzdCgpOiBQcm9taXNlPElQYXJ0eVdvcmtMaXN0RGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9nZXRWaWxsYWdlV29ya0xpc3QnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0RmluYW5jZVdvcmtMaXN0KCk6IFByb21pc2U8SVBhcnR5V29ya0xpc3REYXRhPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2dldEZpbmFuY2VXb3JrTGlzdCdcclxuICAgIH0pXHJcbiAgfVxyXG59Il19