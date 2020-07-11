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
            barLeft: barLeft,
            barRight: barRight,
            tabs: this.generateTabs(titles)
        });
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0RBQStGO0FBaUIvRixJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7QUFDakcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7QUFDakosR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUVqRyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDUDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtRQUNELFlBQVksRUFBRSxDQUFDO1FBRWYsSUFBSSxFQUFFLEVBQVc7UUFDakIsU0FBUyxFQUFFLENBQUM7UUFFWixPQUFPLEVBQUUsSUFBSTtRQUNiLFFBQVEsRUFBRSxVQUFVO1FBRXBCLFNBQVMsRUFBRSxFQUF3QjtRQUNuQyxJQUFJLEVBQUUsRUFBMEI7S0FDakM7SUFDRCxNQUFNO1FBQ0ksSUFBQSwrQ0FBTSxDQUFvQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQ2hDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFDRCxhQUFhLFlBQUMsQ0FBVztRQUN2QixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDdEMsSUFBQSxtQkFBOEMsRUFBNUMsb0JBQU8sRUFBRSxzQkFBUSxFQUFFLGtCQUF5QixDQUFBO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLFNBQUE7WUFDUCxRQUFRLFVBQUE7WUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFVBQVUsWUFBQyxDQUFXO1FBQ3BCLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUsS0FBSztZQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ25FLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZLEVBQVosVUFBYSxNQUFnQjtRQUMzQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBQ0ssaUJBQWlCOzs7Ozs7O3dCQUVELFdBQU0sSUFBSSxtQkFBYyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQXpELFNBQVMsR0FBRyxTQUE2Qzt3QkFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxTQUFTLFdBQUE7NEJBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzt5QkFDckMsQ0FBQyxDQUFBOzs7O3dCQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxDQUFDLENBQUE7Ozs7OztLQUVuQjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbmltcG9ydCBBdHRlbnRpb25Nb2RlbCwgeyBJUGFydHlXb3JrSXRlbURhdGEsIElQYXJ0eVdvcmtMaXN0RGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9hdHRlbnRpb24nXHJcblxyXG5pbnRlcmZhY2UgVGFiRXZlbnQge1xyXG4gIGRldGFpbD86IHtcclxuICAgIGluZGV4OiBudW1iZXJcclxuICB9LFxyXG4gIGN1cnJlbnRUYXJnZXQ/OiB7XHJcbiAgICBkYXRhc2V0OiB7XHJcbiAgICAgIGluZGV4OiBudW1iZXJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBUYWIge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxufVxyXG5cclxubGV0IG1hcCA9IG5ldyBNYXAoKVxyXG5tYXAuc2V0KDAsIHsgdGl0bGVzOiBbJ+WFqOmDqCcsICflhZrlkZjlj5HlsZUnLCAn5YWa5ZGY566h55CGJywgJ+WFmuWRmOa0u+WKqCcsICflhbbku5YnXSwgYmFyTGVmdDogJzAlJywgYmFyUmlnaHQ6ICc2Ni42NjY3JScgfSlcclxubWFwLnNldCgxLCB7IHRpdGxlczogWyflhajpg6gnLCAn5p2R57qn5YqhKOivrynlt6UnLCAn5p2R6IGY5Lq65ZGYJywgJ+S9juS/neaIt+WPiuS9juaUtuWFpeWGnOaItycsICflhpzmsJHlu7rmiL8nLCAn5aSx5Zyw5Yac5rCR5L+d6ZmpJywgJ+Weg+WcvuWIhuexuycsICfor5rkv6HmjIfmlbAnLCAn5YW25LuWJ10sIGJhckxlZnQ6ICczMy4zMzMzJScsIGJhclJpZ2h0OiAnMzMuMzMzMyUnIH0pXHJcbm1hcC5zZXQoMiwgeyB0aXRsZXM6IFsn5YWo6YOoJywgJ+i0ouWKoeWFrOW8gCcsICfotYTkuqfotYTmupAnLCAn5bu66K6+5bel56iLJywgJ+WFtuS7liddLCBiYXJMZWZ0OiAnNjYuNjY2NyUnLCBiYXJSaWdodDogJzAlJyB9KVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgdG9wVGFiczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmFtZTogJ+WFmuWKoeWFrOW8gCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5hbWU6ICfmnZHliqHlhazlvIAnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAn6LSi5Yqh5YWs5byAJ1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgYWN0aXZlVG9wVGFiOiAwLFxyXG5cclxuICAgIHRhYnM6IFtdIGFzIFRhYltdLFxyXG4gICAgYWN0aXZlVGFiOiAwLFxyXG5cclxuICAgIGJhckxlZnQ6ICcwJScsXHJcbiAgICBiYXJSaWdodDogJzY2LjY2NjclJyxcclxuXHJcbiAgICB0b3RhbERhdGE6IHt9IGFzIElQYXJ0eVdvcmtMaXN0RGF0YSxcclxuICAgIGxpc3Q6IFtdIGFzIElQYXJ0eVdvcmtJdGVtRGF0YVtdXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCB7IHRpdGxlcyB9ID0gbWFwLmdldCh0aGlzLmRhdGEuYWN0aXZlVG9wVGFiKVxyXG4gICAgdGhpcy5zZXREYXRhKHsgXHJcbiAgICAgIHRhYnM6IHRoaXMuZ2VuZXJhdGVUYWJzKHRpdGxlcylcclxuICAgIH0pXHJcbiAgICB0aGlzLmxvYWRQYXJ0eVdvcmtMaXN0KClcclxuICB9LFxyXG4gIG9uVG9wVGFiQ2xpY2soZTogVGFiRXZlbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0IS5kYXRhc2V0LmluZGV4XHJcbiAgICBjb25zdCB7IGJhckxlZnQsIGJhclJpZ2h0LCB0aXRsZXMgfSA9IG1hcC5nZXQoaW5kZXgpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBhY3RpdmVUb3BUYWI6IGluZGV4LFxyXG4gICAgICBiYXJMZWZ0LFxyXG4gICAgICBiYXJSaWdodCxcclxuICAgICAgdGFiczogdGhpcy5nZW5lcmF0ZVRhYnModGl0bGVzKVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uVGFiQ2xpY2soZTogVGFiRXZlbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWwhLmluZGV4XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBhY3RpdmVUYWI6IGluZGV4LFxyXG4gICAgICBsaXN0OiB0aGlzLmRhdGEudG90YWxEYXRhW2luZGV4XSA/IHRoaXMuZGF0YS50b3RhbERhdGFbaW5kZXhdIDogW11cclxuICAgIH0pXHJcbiAgfSxcclxuICBnZW5lcmF0ZVRhYnModGl0bGVzOiBzdHJpbmdbXSk6IFRhYltdIHtcclxuICAgIHJldHVybiB0aXRsZXMubWFwKGl0ZW0gPT4gKHsgdGl0bGU6IGl0ZW0gfSkpXHJcbiAgfSxcclxuICBhc3luYyBsb2FkUGFydHlXb3JrTGlzdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsRGF0YSA9IGF3YWl0IG5ldyBBdHRlbnRpb25Nb2RlbCgpLmdldFBhcnR5V29ya0xpc3QoKVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRvdGFsRGF0YSxcclxuICAgICAgICBsaXN0OiB0b3RhbERhdGFbdGhpcy5kYXRhLmFjdGl2ZVRhYl1cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbiAgfSxcclxufSkiXX0=