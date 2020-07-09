"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        formData: {},
        rules: [
            {
                name: 'name',
                rules: { required: true, message: '请输入姓名' },
            },
            {
                name: 'phone',
                rules: { required: true, message: '请输入手机号码' },
            },
            {
                name: 'situation',
                rules: { required: true, message: '请输入要反应的情况' },
            }
        ],
        files: [
            {
                url: 'http://bpic.588ku.com//back_origin_min_pic/20/06/25/60b55efbaddf0d331c0d0d1d4f4801ef.jpg!/fw/750/quality/99/unsharp/true/compress/true',
            }
        ]
    },
    onLoad: function () {
    },
    onFormInputChange: function (e) {
        var _a;
        var field = e.currentTarget.dataset.field;
        this.setData((_a = {},
            _a["formData." + field] = e.detail.value,
            _a));
    },
    onSubmitForm: function () {
        var _this = this;
        this.selectComponent('#form').validate(function (valid, errors) {
            if (!valid) {
                var firstError = Object.keys(errors);
                if (firstError.length) {
                    util_1.showToast(errors[firstError[0]].message, 'none');
                    return false;
                }
            }
            console.log('formData', _this.data.formData);
            return;
        });
    },
    chooseImage: function (_e) {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var tempFilePaths = res.tempFilePaths;
                var chooeseFiles = tempFilePaths.map(function (tempFilePath) { return ({ url: tempFilePath }); });
                _this.setData({
                    files: _this.data.files.concat(chooeseFiles)
                });
                wx.uploadFile({
                    url: 'https://example.weixin.qq.com/upload',
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user_id': '123',
                        'name': 'Jack',
                        'age': 18
                    },
                    success: function (res) {
                        var data = res.data;
                        console.log(data);
                    }
                });
            }
        });
    },
    previewImage: function (e) {
        var current = e.currentTarget.dataset.src;
        var urls = this.data.files.map(function (file) { return file.url; });
        wx.previewImage({
            current: current,
            urls: urls
        });
    },
    removeImage: function (e) {
        var index = e.currentTarget.dataset.index;
        var files = this.data.files;
        this.setData({
            files: files.filter(function (_file, i) { return i !== index; })
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE0QztBQWE1QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFFVDtRQUNELEtBQUssRUFBRTtZQUNMO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTthQUM1QztZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTthQUM5QztZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7YUFDaEQ7U0FDRjtRQUNELEtBQUssRUFBRTtZQUNMO2dCQUNFLEdBQUcsRUFBRSx3SUFBd0k7YUFDOUk7U0FDRjtLQUNGO0lBQ0QsTUFBTTtJQUVOLENBQUM7SUFDRCxpQkFBaUIsWUFBQyxDQUFjOztRQUM5QixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGNBQVksS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDckMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZO1FBQVosaUJBY0M7UUFiQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFDLEtBQWMsRUFBRSxNQUFNO1lBRTVELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO29CQUNyQixnQkFBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUE7b0JBQ2hELE9BQU8sS0FBSyxDQUFBO2lCQUNiO2FBQ0Y7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRTNDLE9BQU07UUFDUixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUMsRUFBTztRQUFuQixpQkE2QkM7UUE1QkMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztZQUNwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO1lBQy9CLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBRVgsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQTtnQkFDdkMsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFlBQVksSUFBSSxPQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO2dCQUMvRSxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLEtBQUssRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2lCQUM1QyxDQUFDLENBQUE7Z0JBQ0YsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDWixHQUFHLEVBQUUsc0NBQXNDO29CQUMzQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFO3dCQUNSLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixNQUFNLEVBQUUsTUFBTTt3QkFDZCxLQUFLLEVBQUUsRUFBRTtxQkFDVjtvQkFDRCxPQUFPLEVBQUUsVUFBQyxHQUFHO3dCQUNYLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUE7d0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBRW5CLENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxZQUFZLFlBQUMsQ0FBaUQ7UUFDNUQsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFBO1FBQzNDLElBQU0sSUFBSSxHQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxHQUFHLEVBQVIsQ0FBUSxDQUFDLENBQUE7UUFDNUQsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLE9BQU8sU0FBQTtZQUNQLElBQUksTUFBQTtTQUNMLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxXQUFXLFlBQUMsQ0FBbUQ7UUFDN0QsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFBO1FBQzNDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssS0FBSyxFQUFYLENBQVcsQ0FBQztTQUMvQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcclxuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcclxuXHJcbmludGVyZmFjZSBjaGFuZ2VFdmVudCB7XHJcbiAgY3VycmVudFRhcmdldDoge1xyXG4gICAgZGF0YXNldDoge1xyXG4gICAgICBmaWVsZDogc3RyaW5nXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGV0YWlsOiB7XHJcbiAgICB2YWx1ZTogc3RyaW5nXHJcbiAgfVxyXG59XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBmb3JtRGF0YToge1xyXG5cclxuICAgIH0sXHJcbiAgICBydWxlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl5aeT5ZCNJyB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Bob25lJyxcclxuICAgICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeaJi+acuuWPt+eggScgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzaXR1YXRpb24nLFxyXG4gICAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn6K+36L6T5YWl6KaB5Y+N5bqU55qE5oOF5Ya1JyB9LFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgZmlsZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVybDogJ2h0dHA6Ly9icGljLjU4OGt1LmNvbS8vYmFja19vcmlnaW5fbWluX3BpYy8yMC8wNi8yNS82MGI1NWVmYmFkZGYwZDMzMWMwZDBkMWQ0ZjQ4MDFlZi5qcGchL2Z3Lzc1MC9xdWFsaXR5Lzk5L3Vuc2hhcnAvdHJ1ZS9jb21wcmVzcy90cnVlJyxcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG5cclxuICB9LFxyXG4gIG9uRm9ybUlucHV0Q2hhbmdlKGU6IGNoYW5nZUV2ZW50KSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZWxkXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBbYGZvcm1EYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25TdWJtaXRGb3JtKCkge1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmb3JtJykudmFsaWRhdGUoKHZhbGlkOiBib29sZWFuLCBlcnJvcnMpOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbGlkJywgdmFsaWQsIGVycm9ycylcclxuICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0RXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpXHJcbiAgICAgICAgaWYgKGZpcnN0RXJyb3IubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzaG93VG9hc3QoZXJyb3JzW2ZpcnN0RXJyb3JbMF1dLm1lc3NhZ2UsICdub25lJylcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybURhdGEnLCB0aGlzLmRhdGEuZm9ybURhdGEpXHJcbiAgICAgIC8vIOiwg+eUqOaOpeWPo1xyXG4gICAgICByZXR1cm5cclxuICAgIH0pXHJcbiAgfSxcclxuICBjaG9vc2VJbWFnZShfZTogYW55KSB7XHJcbiAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgIGNvdW50OiAxLCAvLyDmnIDlpJrlj6/ku6XpgInmi6nnmoTlm77niYflvKDmlbAsIOm7mOiupCA544CAXHJcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcbiAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgY29uc3QgY2hvb2VzZUZpbGVzID0gdGVtcEZpbGVQYXRocy5tYXAodGVtcEZpbGVQYXRoID0+ICh7IHVybDogdGVtcEZpbGVQYXRoIH0pKVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBmaWxlczogdGhpcy5kYXRhLmZpbGVzLmNvbmNhdChjaG9vZXNlRmlsZXMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZXhhbXBsZS53ZWl4aW4ucXEuY29tL3VwbG9hZCcsIC8vIOWbvueJh+S4iuS4iuS8oOeahOWcsOWdgO+8jOivt+axguaWueW8j+m7mOiupOS4ulBPU1TkuJTkuI3lj6/mm7TmlLlcclxuICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLCAvLyDopoHkuIrkvKDnmoTmlofku7bnmoTot6/lvoTvvIzms6jvvJrkuIDmrKHlj6rog73kuIrkvKDkuIDkuKrmlofku7bvvIzoi6XopoHkuIrkvKDlpJrlvKDlm77niYfvvIzor7fkvb/nlKjpgJLlvZJcclxuICAgICAgICAgIG5hbWU6ICdmaWxlJywgLy8gLy8g5paH5Lu25a+55bqU55qE6ZSu5ZCN77yM5ZCO56uv5Y+v5Lul6YCa6L+H6L+Z5Liqa2V56I635Y+W5Yiw5paH5Lu255qE5LqM6L+b5Yi25YaF5a65XHJcbiAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAndXNlcl9pZCc6ICcxMjMnLFxyXG4gICAgICAgICAgICAnbmFtZSc6ICdKYWNrJyxcclxuICAgICAgICAgICAgJ2FnZSc6IDE4XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgLy8g6LCD55So5o6l5Y+jXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHByZXZpZXdJbWFnZShlOiB7IGN1cnJlbnRUYXJnZXQ6IHsgZGF0YXNldDogeyBzcmM6IHN0cmluZyB9IH19KSB7XHJcbiAgICBjb25zdCBjdXJyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc3JjXHJcbiAgICBjb25zdCB1cmxzOiBzdHJpbmdbXSA9IHRoaXMuZGF0YS5maWxlcy5tYXAoZmlsZSA9PiBmaWxlLnVybClcclxuICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgIGN1cnJlbnQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgdXJscyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcmVtb3ZlSW1hZ2UoZTogeyBjdXJyZW50VGFyZ2V0OiB7IGRhdGFzZXQ6IHsgaW5kZXg6IG51bWJlciB9IH19KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZGF0YS5maWxlc1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZmlsZXM6IGZpbGVzLmZpbHRlcigoX2ZpbGUsIGkpID0+IGkgIT09IGluZGV4KVxyXG4gICAgfSlcclxuICB9XHJcbn0pIl19