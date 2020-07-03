"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Load = (function () {
    function Load() {
        var _this = this;
        this.withLoading = function (cb) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var that = args[0];
                that.setData({
                    isLoadingCenter: true
                });
                _this.resetPageNum();
                return cb.apply(void 0, args.concat([{
                        pageSize: _this.pageSize,
                        pageNum: _this.pageNum,
                    }]));
            };
        };
        this.widthLoadingMore = function (cb) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var that = args[0];
                that.setData({
                    isLoading: true
                });
                _this.updatePageNum();
                return cb.apply(void 0, args.concat([{
                        pageSize: _this.pageSize,
                        pageNum: _this.pageNum,
                    }]));
            };
        };
        this.hideLoading = function (that) {
            that.setData({
                isLoadingCenter: false
            });
        };
        this.hideLoadingMore = function (that) {
            that.setData({
                isLoading: false
            });
        };
        this.pageSize = 15;
        this.pageNum = 1;
        this.total = 0;
    }
    Load.prototype.resetPageNum = function () {
        this.pageNum = 1;
    };
    Load.prototype.updatePageNum = function () {
        this.pageNum += 1;
    };
    Load.prototype.setPageNum = function (pageNum) {
        this.pageNum = pageNum;
    };
    Load.prototype.setTotal = function (total) {
        this.total = total;
    };
    Load.prototype.getTotal = function () {
        return this.total;
    };
    return Load;
}());
exports.default = Load;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFO1FBQUEsaUJBSUM7UUEwQk0sZ0JBQVcsR0FBRyxVQUFDLEVBQWM7WUFDbEMsT0FBTztnQkFBQyxjQUFjO3FCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7b0JBQWQseUJBQWM7O2dCQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFpQixDQUFBO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGVBQWUsRUFBRSxJQUFJO2lCQUN0QixDQUFDLENBQUE7Z0JBRUYsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUNuQixPQUFPLEVBQUUsZUFBSSxJQUFJLFNBQUU7d0JBQ2pCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTt3QkFDdkIsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPO3FCQUN0QixJQUFDO1lBQ0osQ0FBQyxDQUFBO1FBQ0gsQ0FBQyxDQUFBO1FBR00scUJBQWdCLEdBQUcsVUFBQyxFQUFjO1lBQ3ZDLE9BQU87Z0JBQUMsY0FBYztxQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO29CQUFkLHlCQUFjOztnQkFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBaUIsQ0FBQTtnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFBO2dCQUVGLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtnQkFDcEIsT0FBTyxFQUFFLGVBQUksSUFBSSxTQUFFO3dCQUNqQixRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVE7d0JBQ3ZCLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztxQkFDdEIsSUFBQztZQUNKLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQTtRQUVNLGdCQUFXLEdBQUcsVUFBQyxJQUFrQjtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGVBQWUsRUFBRSxLQUFLO2FBQ3ZCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQUVNLG9CQUFlLEdBQUcsVUFBQyxJQUFrQjtZQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQTtRQXRFQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNoQixDQUFDO0lBRU8sMkJBQVksR0FBcEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU8sNEJBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBR00seUJBQVUsR0FBakIsVUFBa0IsT0FBZTtRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBR00sdUJBQVEsR0FBZixVQUFnQixLQUFhO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFHTSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25CLENBQUM7SUE4Q0gsV0FBQztBQUFELENBQUMsQUE3RUQsSUE2RUM7QUFFRCxrQkFBZSxJQUFJLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEZuQ2FsbEJhY2sgPSAoLi4uYXJnczogYW55W10pID0+IGFueVxyXG5cclxuY2xhc3MgTG9hZCB7XHJcbiAgcHJpdmF0ZSBwYWdlU2l6ZTogbnVtYmVyXHJcbiAgcHJpdmF0ZSBwYWdlTnVtOiBudW1iZXJcclxuICBwcml2YXRlIHRvdGFsOiBudW1iZXJcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucGFnZVNpemUgPSAxNVxyXG4gICAgdGhpcy5wYWdlTnVtID0gMVxyXG4gICAgdGhpcy50b3RhbCA9IDBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRQYWdlTnVtKCkge1xyXG4gICAgdGhpcy5wYWdlTnVtID0gMVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQYWdlTnVtKCkge1xyXG4gICAgdGhpcy5wYWdlTnVtICs9IDFcclxuICB9XHJcblxyXG4gIC8vIOiuvue9ruW9k+WJjemhteeggVxyXG4gIHB1YmxpYyBzZXRQYWdlTnVtKHBhZ2VOdW06IG51bWJlcikge1xyXG4gICAgdGhpcy5wYWdlTnVtID0gcGFnZU51bVxyXG4gIH1cclxuXHJcbiAgLy8g6K6+572u5oC75pWwXHJcbiAgcHVibGljIHNldFRvdGFsKHRvdGFsOiBudW1iZXIpIHtcclxuICAgIHRoaXMudG90YWwgPSB0b3RhbFxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5oC75pWwXHJcbiAgcHVibGljIGdldFRvdGFsKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbFxyXG4gIH1cclxuXHJcbiAgLy8g5Yid5qyh5Yqg6L29XHJcbiAgcHVibGljIHdpdGhMb2FkaW5nID0gKGNiOiBGbkNhbGxCYWNrKSA9PiB7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSBhcmdzWzBdIGFzIFBhZ2VJbnN0YW5jZVxyXG4gICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgIGlzTG9hZGluZ0NlbnRlcjogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5yZXNldFBhZ2VOdW0oKVxyXG4gICAgICByZXR1cm4gY2IoLi4uYXJncywge1xyXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgIHBhZ2VOdW06IHRoaXMucGFnZU51bSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOWKoOi9veabtOWkmlxyXG4gIHB1YmxpYyB3aWR0aExvYWRpbmdNb3JlID0gKGNiOiBGbkNhbGxCYWNrKSA9PiB7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoYXQgPSBhcmdzWzBdIGFzIFBhZ2VJbnN0YW5jZVxyXG4gICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVQYWdlTnVtKClcclxuICAgICAgcmV0dXJuIGNiKC4uLmFyZ3MsIHtcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICBwYWdlTnVtOiB0aGlzLnBhZ2VOdW0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGlkZUxvYWRpbmcgPSAodGhhdDogUGFnZUluc3RhbmNlKSA9PiB7XHJcbiAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICBpc0xvYWRpbmdDZW50ZXI6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGVMb2FkaW5nTW9yZSA9ICh0aGF0OiBQYWdlSW5zdGFuY2UpID0+IHtcclxuICAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgIGlzTG9hZGluZzogZmFsc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZCJdfQ==