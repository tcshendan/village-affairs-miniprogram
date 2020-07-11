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
var HomeModel = (function (_super) {
    __extends(HomeModel, _super);
    function HomeModel() {
        return _super.call(this) || this;
    }
    HomeModel.prototype.getInfo = function () {
        return this.request({
            url: '/record/home/product/follow'
        });
    };
    HomeModel.prototype.getMyFollowList = function (_a) {
        var pageNum = _a.pageNum, pageSize = _a.pageSize, _b = _a.keywords, keywords = _b === void 0 ? '' : _b;
        return this.request({
            url: '/record/page/follow',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                keywords: keywords
            }
        });
    };
    HomeModel.prototype.getPartyWorkList = function () {
        return this.request({
            url: '/getPartyWorkList'
        });
    };
    return HomeModel;
}(request_1.default));
exports.default = HomeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXNDO0FBbUJ0QztJQUF1Qyw2QkFBTztJQUM1QztlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLDZCQUE2QjtTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixFQUFrRDtZQUFoRCxvQkFBTyxFQUFFLHNCQUFRLEVBQUUsZ0JBQWEsRUFBYixrQ0FBYTtRQU1oRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLHFCQUFxQjtZQUMxQixJQUFJLEVBQUU7Z0JBQ0osT0FBTyxTQUFBO2dCQUNQLFFBQVEsVUFBQTtnQkFDUixRQUFRLFVBQUE7YUFDVDtTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLG1CQUFtQjtTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDLEFBakNELENBQXVDLGlCQUFPLEdBaUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnXHJcblxyXG5pbnRlcmZhY2UgSVJlcXVlc3REYXRhIGV4dGVuZHMgSVBhZ2VEYXRhIHtcclxuICBrZXl3b3Jkcz86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJ0eVdvcmtJdGVtRGF0YSB7XHJcbiAgbGlzdHN0eWxlOiBudW1iZXIsXHJcbiAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgbmFtZT86IHN0cmluZyxcclxuICB0aXRsZVRleHQ/OiBzdHJpbmdcclxuICB0eXBlOiBzdHJpbmcsXHJcbiAgZGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcnR5V29ya0xpc3REYXRhIHtcclxuICBbcHJvcE5hbWU6IHN0cmluZ106IElQYXJ0eVdvcmtJdGVtRGF0YVtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVNb2RlbCBleHRlbmRzIFJlcXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5mbygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3JlY29yZC9ob21lL3Byb2R1Y3QvZm9sbG93J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldE15Rm9sbG93TGlzdCh7IHBhZ2VOdW0sIHBhZ2VTaXplLCBrZXl3b3JkcyA9ICcnIH06IElSZXF1ZXN0RGF0YSk6IFByb21pc2U8SVJlc3BvbnNlTGlzdERhdGE8e1xyXG4gICAgcHJvZHVjdDogc3RyaW5nLFxyXG4gICAgc2FsZXM6IG51bWJlcixcclxuICAgIHNhbGVzQXZnUHJpY2U6IG51bWJlcixcclxuICAgIHlpZWxkOiBudW1iZXJcclxuICB9Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9yZWNvcmQvcGFnZS9mb2xsb3cnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZU51bSxcclxuICAgICAgICBwYWdlU2l6ZSxcclxuICAgICAgICBrZXl3b3Jkc1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0UGFydHlXb3JrTGlzdCgpOiBQcm9taXNlPElQYXJ0eVdvcmtMaXN0RGF0YT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9nZXRQYXJ0eVdvcmtMaXN0J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59Il19