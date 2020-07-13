"use strict";
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
var attention_1 = require("../../models/attention");
var map = new Map();
map.set(0, { titles: ['全部', '党员发展', '党员管理', '党员活动', '其他'], barLeft: '0%', barRight: '66.6667%' });
map.set(1, { titles: ['全部', '村级务(误)工', '村聘人员', '低保户及低收入农户', '农民建房', '失地农民保险', '垃圾分类', '诚信指数', '其他'], barLeft: '33.3333%', barRight: '33.3333%' });
map.set(2, { titles: ['全部', '财务公开', '资产资源', '建设工程', '其他'], barLeft: '66.6667%', barRight: '0%' });
Page({
    data: {
        topTabs: [
            {
                id: 0,
                name: '党务公开'
            },
            {
                id: 1,
                name: '村务公开'
            },
            {
                id: 2,
                name: '财务公开'
            }
        ],
        activeTopTab: 0,
        tabs: [],
        activeTab: 0,
        barLeft: '0%',
        barRight: '66.6667%',
        totalData: {},
        list: []
    },
    onLoad: function () {
        var titles = map.get(this.data.activeTopTab).titles;
        this.setData({
            tabs: this.generateTabs(titles)
        });
        this.loadPartyWorkList();
    },
    onTopTabClick: function (e) {
        var index = e.currentTarget.dataset.index;
        var _a = map.get(index), barLeft = _a.barLeft, barRight = _a.barRight, titles = _a.titles;
        this.setData({
            activeTopTab: index,
            activeTab: 0,
            barLeft: barLeft,
            barRight: barRight,
            tabs: this.generateTabs(titles)
        });
        if (index === 0) {
            this.loadPartyWorkList();
        }
        else if (index === 1) {
            this.loadVillageWorkList();
        }
        else if (index === 2) {
            this.loadFinanceWorkList();
        }
    },
    onTabClick: function (e) {
        var index = e.detail.index;
        this.setData({
            activeTab: index,
            list: this.data.totalData[index] ? this.data.totalData[index] : []
        });
    },
    generateTabs: function (titles) {
        return titles.map(function (item) { return ({ title: item }); });
    },
    loadPartyWorkList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, new attention_1.default().getPartyWorkList()];
                    case 1:
                        totalData = _a.sent();
                        this.setData({
                            totalData: totalData,
                            list: totalData[this.data.activeTab]
                        });
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    },
    loadVillageWorkList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalData, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, new attention_1.default().getVillageWorkList()];
                    case 1:
                        totalData = _a.sent();
                        this.setData({
                            totalData: totalData,
                            list: totalData[this.data.activeTab]
                        });
                        return [3, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    },
    loadFinanceWorkList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalData, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, new attention_1.default().getFinanceWorkList()];
                    case 1:
                        totalData = _a.sent();
                        this.setData({
                            totalData: totalData,
                            list: totalData[this.data.activeTab]
                        });
                        return [3, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0RBQStGO0FBaUIvRixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7QUFDakcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7QUFDakosR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUVqRyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDUDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxN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O3dCQUVILFdBQU0sSUFBSSxtQkFBYyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBQTs7d0JBQTNELFNBQVMsR0FBRyxTQUErQzt3QkFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxTQUFTLFdBQUE7NEJBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDckMsQ0FBQyxDQUFBOzs7O3dCQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxDQUFDLENBQUE7Ozs7OztLQUVuQjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbmltcG9ydCBBdHRlbnRpb25Nb2RlbCwgeyBJUGFydHlXb3JrSXRlbURhdGEsIElQYXJ0eVdvcmtMaXN0RGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9hdHRlbnRpb24nXHJcblxyXG5pbnRlcmZhY2UgVGFiRXZlbnQge1xyXG4gIGRldGFpbD86IHtcclxuICAgIGluZGV4OiBudW1iZXJcclxuICB9LFxyXG4gIGN1cnJlbnRUYXJnZXQ/OiB7XHJcbiAgICBkYXRhc2V0OiB7XHJcbiAgICAgIGluZGV4OiBudW1iZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUYWIge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxufVxyXG5cclxubGV0IG1hcCA9IG5ldyBNYXAoKVxyXG5tYXAuc2V0KDAsIHsgdGl0bGVzOiBbJ+WFqOmDqCcsICflhZrlkZjlj5HlsZUnLCAn5YWa5ZGY566h55CGJywgJ+WFmuWRmOa0u+WKqCcsICflhbbku5YnXSwgYmFyTGVmdDogJzAlJywgYmFyUmlnaHQ6ICc2Ni42NjY3JScgfSlcclxubWFwLnNldCgxLCB7IHRpdGxlczogWyflhajpg6gnLCAn5p2R57qn5YqhKOivrynlt6UnLCAn5p2R6IGY5Lq65ZGYJywgJ+S9juS/neaIt+WPiuS9juaUtuWFpeWGnOaItycsICflhpzmsJHlu7rmiL8nLCAn5aSx5Zyw5Yac5rCR5L+d6ZmpJywgJ+Weg+WcvuWIhuexuycsICfor5rkv6HmjIfmlbAnLCAn5YW25LuWJ10sIGJhckxlZnQ6ICczMy4zMzMzJScsIGJhclJpZ2h0OiAnMzMuMzMzMyUnIH0pXHJcbm1hcC5zZXQoMiwgeyB0aXRsZXM6IFsn5YWo6YOoJywgJ+i0ouWKoeWFrOW8gCcsICfotYTkuqfotYTmupAnLCAn5bu66K6+5bel56iLJywgJ+WFtuS7liddLCBiYXJMZWZ0OiAnNjYuNjY2NyUnLCBiYXJSaWdodDogJzAlJyB9KVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdG9wVGFiczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmFtZTogJ+WFmuWKoeWFrOW8gCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICfmnZHliqHlhazlvIAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAn6LSi5Yqh5YWs5byAJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgYWN0aXZlVG9wVGFiOiAwLFxyXG5cclxuICAgIHRhYnM6IFtdIGFzIFRhYltdLFxyXG4gICAgYWN0aXZlVGFiOiAwLFxyXG5cclxuICAgIGJhckxlZnQ6ICcwJScsXHJcbiAgICBiYXJSaWdodDogJzY2LjY2NjclJyxcclxuXHJcbiAgICB0b3RhbERhdGE6IHt9IGFzIElQYXJ0eVdvcmtMaXN0RGF0YSxcclxuICAgIGxpc3Q6IFtdIGFzIElQYXJ0eVdvcmtJdGVtRGF0YVtdXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlcyB9ID0gbWFwLmdldCh0aGlzLmRhdGEuYWN0aXZlVG9wVGFiKVxyXG4gICAgdGhpcy5zZXREYXRhKHsgXHJcbiAgICAgIHRhYnM6IHRoaXMuZ2VuZXJhdGVUYWJzKHRpdGxlcylcclxuICAgIH0pXHJcbiAgICB0aGlzLmxvYWRQYXJ0eVdvcmtMaXN0KClcclxuICB9LFxyXG4gIG9uVG9wVGFiQ2xpY2soZTogVGFiRXZlbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0IS5kYXRhc2V0LmluZGV4XHJcbiAgICBjb25zdCB7IGJhckxlZnQsIGJhclJpZ2h0LCB0aXRsZXMgfSA9IG1hcC5nZXQoaW5kZXgpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBhY3RpdmVUb3BUYWI6IGluZGV4LFxyXG4gICAgICBhY3RpdmVUYWI6IDAsXHJcbiAgICAgIGJhckxlZnQsXHJcbiAgICAgIGJhclJpZ2h0LFxyXG4gICAgICB0YWJzOiB0aGlzLmdlbmVyYXRlVGFicyh0aXRsZXMpXHJcbiAgICB9KVxyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMubG9hZFBhcnR5V29ya0xpc3QoKVxyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmxvYWRWaWxsYWdlV29ya0xpc3QoKVxyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICB0aGlzLmxvYWRGaW5hbmNlV29ya0xpc3QoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25UYWJDbGljayhlOiBUYWJFdmVudCkge1xyXG4gICAgY29uc3QgaW5kZXggPSBlLmRldGFpbCEuaW5kZXhcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGFjdGl2ZVRhYjogaW5kZXgsXHJcbiAgICAgIGxpc3Q6IHRoaXMuZGF0YS50b3RhbERhdGFbaW5kZXhdID8gdGhpcy5kYXRhLnRvdGFsRGF0YVtpbmRleF0gOiBbXVxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdlbmVyYXRlVGFicyh0aXRsZXM6IHN0cmluZ1tdKTogVGFiW10ge1xyXG4gICAgcmV0dXJuIHRpdGxlcy5tYXAoaXRlbSA9PiAoeyB0aXRsZTogaXRlbSB9KSlcclxuICB9LFxyXG4gIGFzeW5jIGxvYWRQYXJ0eVdvcmtMaXN0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG90YWxEYXRhID0gYXdhaXQgbmV3IEF0dGVudGlvbk1vZGVsKCkuZ2V0UGFydHlXb3JrTGlzdCgpXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdG90YWxEYXRhLFxyXG4gICAgICAgIGxpc3Q6IHRvdGFsRGF0YVt0aGlzLmRhdGEuYWN0aXZlVGFiXVxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGxvYWRWaWxsYWdlV29ya0xpc3QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b3RhbERhdGEgPSBhd2FpdCBuZXcgQXR0ZW50aW9uTW9kZWwoKS5nZXRWaWxsYWdlV29ya0xpc3QoKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRvdGFsRGF0YSxcclxuICAgICAgICBsaXN0OiB0b3RhbERhdGFbdGhpcy5kYXRhLmFjdGl2ZVRhYl1cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBsb2FkRmluYW5jZVdvcmtMaXN0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG90YWxEYXRhID0gYXdhaXQgbmV3IEF0dGVudGlvbk1vZGVsKCkuZ2V0RmluYW5jZVdvcmtMaXN0KClcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0b3RhbERhdGEsXHJcbiAgICAgICAgbGlzdDogdG90YWxEYXRhW3RoaXMuZGF0YS5hY3RpdmVUYWJdXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=