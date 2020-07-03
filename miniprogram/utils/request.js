"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../config/index");
var index_2 = require("../constant/index");
var util_1 = require("../utils/util");
var ERROR_MSG;
(function (ERROR_MSG) {
    ERROR_MSG[ERROR_MSG["\u672A\u77E5\u5F02\u5E38"] = 1] = "\u672A\u77E5\u5F02\u5E38";
    ERROR_MSG[ERROR_MSG["\u9519\u8BEF\u8BF7\u6C42"] = 400] = "\u9519\u8BEF\u8BF7\u6C42";
    ERROR_MSG[ERROR_MSG["\u8BF7\u767B\u5F55"] = 401] = "\u8BF7\u767B\u5F55";
    ERROR_MSG[ERROR_MSG["\u8BF7\u6C42\u9519\u8BEF\uFF0C\u672A\u627E\u5230\u8BE5\u8D44\u6E90"] = 404] = "\u8BF7\u6C42\u9519\u8BEF\uFF0C\u672A\u627E\u5230\u8BE5\u8D44\u6E90";
    ERROR_MSG[ERROR_MSG["\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8"] = 405] = "\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8";
    ERROR_MSG[ERROR_MSG["\u670D\u52A1\u5668\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"] = 500] = "\u670D\u52A1\u5668\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5";
})(ERROR_MSG || (ERROR_MSG = {}));
var Request = (function () {
    function Request() {
        this.baseUrl = index_1.config.api_base_url;
        this.header = {
            'content-type': 'application/json'
        };
    }
    Request.prototype.request = function (_a) {
        var url = _a.url, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.method, method = _c === void 0 ? 'GET' : _c, _d = _a.isLoginReq, isLoginReq = _d === void 0 ? false : _d;
        return __awaiter(this, void 0, void 0, function () {
            var _e, code, responseData, message;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4, this.fetch(url, data, method, isLoginReq)];
                    case 1:
                        _e = _f.sent(), code = _e.code, responseData = _e.data, message = _e.message;
                        if (code !== 200) {
                            this.showError(code, message);
                            throw new Error(message);
                        }
                        return [2, responseData];
                }
            });
        });
    };
    Request.prototype.fetch = function (url, data, method, isLoginReq) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            wx.request({
                url: _this.baseUrl + url,
                method: method,
                data: data,
                header: _this.generateHeader,
                success: function (res) {
                    var statusCode = res.statusCode, data = res.data;
                    if (statusCode.toString().startsWith('2')) {
                        if (isLoginReq)
                            data.data = res.cookies[0];
                        resolve(data);
                    }
                    else {
                        reject();
                        _this.showError(statusCode);
                    }
                },
                fail: function (err) {
                    reject(err);
                    _this.showError();
                }
            });
        });
    };
    Request.prototype.generateHeader = function () {
        var isLogin = util_1.getLoginStatus();
        if (isLogin) {
            return __assign({}, this.header, { 'Cookie': wx.getStorageSync(index_2.CONSTANTS.LOCALKEY.SESSION) });
        }
        else {
            return this.header;
        }
    };
    Request.prototype.showError = function (errorCode, errorMsg) {
        errorCode = errorCode || 1;
        errorMsg = errorMsg || ERROR_MSG[errorCode];
        util_1.showToast(errorMsg, 'none');
    };
    return Request;
}());
exports.default = Request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDJDQUE2QztBQUM3QyxzQ0FBeUQ7QUFnQnpELElBQUssU0FPSjtBQVBELFdBQUssU0FBUztJQUNaLGlGQUFVLENBQUE7SUFDVixtRkFBWSxDQUFBO0lBQ1osdUVBQVcsQ0FBQTtJQUNYLHVLQUFtQixDQUFBO0lBQ25CLHVIQUFlLENBQUE7SUFDZix1S0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBUEksU0FBUyxLQUFULFNBQVMsUUFPYjtBQUVEO0lBR0U7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQU0sQ0FBQyxZQUFZLENBQUE7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQTtJQUNILENBQUM7SUFFWSx5QkFBTyxHQUFwQixVQUFxQixFQUtnRDtZQUpuRSxZQUFHLEVBQ0gsWUFBUyxFQUFULDhCQUFTLEVBQ1QsY0FBYyxFQUFkLG1DQUFjLEVBQ2Qsa0JBQWtCLEVBQWxCLHVDQUFrQjs7Ozs7NEJBRTJDLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBQTs7d0JBQXhHLEtBQXlELFNBQStDLEVBQXRHLElBQUksVUFBQSxFQUFRLFlBQVksVUFBQSxFQUFFLE9BQU8sYUFBQTt3QkFFdkMsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFOzRCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTs0QkFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTt5QkFDekI7d0JBQ0QsV0FBTyxZQUFZLEVBQUE7Ozs7S0FDcEI7SUFFTyx1QkFBSyxHQUFiLFVBQWMsR0FBVyxFQUFFLElBQVMsRUFBRSxNQUFjLEVBQUUsVUFBbUI7UUFBekUsaUJBdUJDO1FBdEJDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUc7Z0JBQ3ZCLE1BQU0sUUFBQTtnQkFDTixJQUFJLE1BQUE7Z0JBQ0osTUFBTSxFQUFFLEtBQUksQ0FBQyxjQUFjO2dCQUMzQixPQUFPLEVBQUUsVUFBQyxHQUFrQztvQkFDbEMsSUFBQSwyQkFBVSxFQUFFLGVBQUksQ0FBUTtvQkFDaEMsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUN6QyxJQUFJLFVBQVU7NEJBQUcsSUFBd0IsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDaEUsT0FBTyxDQUFDLElBQXVCLENBQUMsQ0FBQTtxQkFDakM7eUJBQU07d0JBQ0wsTUFBTSxFQUFFLENBQUE7d0JBQ1IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtxQkFDM0I7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO29CQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDWCxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ2xCLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyxnQ0FBYyxHQUF0QjtRQUNFLElBQU0sT0FBTyxHQUFHLHFCQUFjLEVBQUUsQ0FBQTtRQUNoQyxJQUFJLE9BQU8sRUFBRTtZQUNYLG9CQUNLLElBQUksQ0FBQyxNQUFNLElBQ2QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQ3hEO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUNuQjtJQUNILENBQUM7SUFFTywyQkFBUyxHQUFqQixVQUFrQixTQUFrQixFQUFFLFFBQWlCO1FBQ3JELFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFBO1FBQzFCLFFBQVEsR0FBRyxRQUFRLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzNDLGdCQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQUVELGtCQUFlLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCdcclxuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi4vY29uc3RhbnQvaW5kZXgnXHJcbmltcG9ydCB7IGdldExvZ2luU3RhdHVzLCBzaG93VG9hc3QgfSBmcm9tICcuLi91dGlscy91dGlsJ1xyXG5cclxuZXhwb3J0IHR5cGUgTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnREVMRVRFJyB8ICdQVVQnXHJcblxyXG5pbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgW3Byb3BOYW1lOiBzdHJpbmddOiBzdHJpbmdcclxufVxyXG5pbnRlcmZhY2UgSVJlc3BvbnNlUmVzdWx0IHtcclxuICBjb2RlOiBudW1iZXIsXHJcbiAgZGF0YTogYW55LFxyXG4gIG1lc3NhZ2U6IHN0cmluZ1xyXG59XHJcbmludGVyZmFjZSBJUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCBleHRlbmRzIFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQge1xyXG4gIGNvb2tpZXM/OiBzdHJpbmdbXVxyXG59XHJcblxyXG5lbnVtIEVSUk9SX01TRyB7XHJcbiAgJ+acquefpeW8guW4uCcgPSAxLFxyXG4gICfplJnor6/or7fmsYInID0gNDAwLFxyXG4gICfor7fnmbvlvZUnID0gNDAxLFxyXG4gICfor7fmsYLplJnor6/vvIzmnKrmib7liLDor6XotYTmupAnID0gNDA0LFxyXG4gICfor7fmsYLmlrnms5XmnKrlhYHorrgnID0gNDA1LFxyXG4gICfmnI3liqHlmajlvILluLjvvIzor7fnqI3lkI7ph43or5UnID0gNTAwXHJcbn1cclxuXHJcbmNsYXNzIFJlcXVlc3Qge1xyXG4gIHByaXZhdGUgYmFzZVVybDogc3RyaW5nXHJcbiAgcHJpdmF0ZSBoZWFkZXI6IElIZWFkZXJcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcuYXBpX2Jhc2VfdXJsXHJcbiAgICB0aGlzLmhlYWRlciA9IHtcclxuICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHJlcXVlc3QoeyBcclxuICAgIHVybCxcclxuICAgIGRhdGEgPSB7fSxcclxuICAgIG1ldGhvZCA9ICdHRVQnLFxyXG4gICAgaXNMb2dpblJlcSA9IGZhbHNlXHJcbiAgfTogeyB1cmw6IHN0cmluZywgZGF0YT86IGFueSwgbWV0aG9kPzogTWV0aG9kLCBpc0xvZ2luUmVxPzogYm9vbGVhbiB9KSB7XHJcbiAgICBsZXQgeyBjb2RlLCBkYXRhOiByZXNwb25zZURhdGEsIG1lc3NhZ2UgfTogSVJlc3BvbnNlUmVzdWx0ID0gYXdhaXQgdGhpcy5mZXRjaCh1cmwsIGRhdGEsIG1ldGhvZCwgaXNMb2dpblJlcSlcclxuICAgIC8vIOacjeWKoeerr+mUmeivr+e7n+S4gOWkhOeQhlxyXG4gICAgaWYgKGNvZGUgIT09IDIwMCkge1xyXG4gICAgICB0aGlzLnNob3dFcnJvcihjb2RlLCBtZXNzYWdlKSAvLyDplJnor6/mj5DnpLpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpIC8vIOi/lOWbnumUmeivr1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YVxyXG4gIH1cclxuICBcclxuICBwcml2YXRlIGZldGNoKHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG1ldGhvZDogTWV0aG9kLCBpc0xvZ2luUmVxOiBib29sZWFuKTogUHJvbWlzZTxJUmVzcG9uc2VSZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5iYXNlVXJsICsgdXJsLFxyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIGhlYWRlcjogdGhpcy5nZW5lcmF0ZUhlYWRlcixcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBJUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlLCBkYXRhIH0gPSByZXNcclxuICAgICAgICAgIGlmIChzdGF0dXNDb2RlLnRvU3RyaW5nKCkuc3RhcnRzV2l0aCgnMicpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xvZ2luUmVxKSAoZGF0YSBhcyBJUmVzcG9uc2VSZXN1bHQpLmRhdGEgPSByZXMuY29va2llcyFbMF1cclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhIGFzIElSZXNwb25zZVJlc3VsdClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHN0YXR1c0NvZGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSGVhZGVyKCk6IElIZWFkZXIge1xyXG4gICAgY29uc3QgaXNMb2dpbiA9IGdldExvZ2luU3RhdHVzKClcclxuICAgIGlmIChpc0xvZ2luKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udGhpcy5oZWFkZXIsXHJcbiAgICAgICAgJ0Nvb2tpZSc6IHd4LmdldFN0b3JhZ2VTeW5jKENPTlNUQU5UUy5MT0NBTEtFWS5TRVNTSU9OKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5oZWFkZXJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKGVycm9yQ29kZT86IG51bWJlciwgZXJyb3JNc2c/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGVycm9yQ29kZSA9IGVycm9yQ29kZSB8fCAxXHJcbiAgICBlcnJvck1zZyA9IGVycm9yTXNnIHx8IEVSUk9SX01TR1tlcnJvckNvZGVdXHJcbiAgICBzaG93VG9hc3QoZXJyb3JNc2csICdub25lJylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3QiXX0=