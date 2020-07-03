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
    return HomeModel;
}(request_1.default));
exports.default = HomeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQXNDO0FBTXRDO0lBQXVDLDZCQUFPO0lBQzVDO2VBQ0UsaUJBQU87SUFDVCxDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUUsNkJBQTZCO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLEVBQWtEO1lBQWhELG9CQUFPLEVBQUUsc0JBQVEsRUFBRSxnQkFBYSxFQUFiLGtDQUFhO1FBTWhELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLElBQUksRUFBRTtnQkFDSixPQUFPLFNBQUE7Z0JBQ1AsUUFBUSxVQUFBO2dCQUNSLFFBQVEsVUFBQTthQUNUO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVILGdCQUFDO0FBQUQsQ0FBQyxBQTNCRCxDQUF1QyxpQkFBTyxHQTJCN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0J1xyXG5cclxuaW50ZXJmYWNlIElSZXF1ZXN0RGF0YSBleHRlbmRzIElQYWdlRGF0YSB7XHJcbiAga2V5d29yZHM/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZU1vZGVsIGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgfVxyXG5cclxuICBnZXRJbmZvKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICcvcmVjb3JkL2hvbWUvcHJvZHVjdC9mb2xsb3cnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TXlGb2xsb3dMaXN0KHsgcGFnZU51bSwgcGFnZVNpemUsIGtleXdvcmRzID0gJycgfTogSVJlcXVlc3REYXRhKTogUHJvbWlzZTxJUmVzcG9uc2VMaXN0RGF0YTx7XHJcbiAgICBwcm9kdWN0OiBzdHJpbmcsXHJcbiAgICBzYWxlczogbnVtYmVyLFxyXG4gICAgc2FsZXNBdmdQcmljZTogbnVtYmVyLFxyXG4gICAgeWllbGQ6IG51bWJlclxyXG4gIH0+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL3JlY29yZC9wYWdlL2ZvbGxvdycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlTnVtLFxyXG4gICAgICAgIHBhZ2VTaXplLFxyXG4gICAgICAgIGtleXdvcmRzXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSJdfQ==