
var briefInfoAjax = {
    commonApi:null,
    newCommonApi:function(commonApi){
        //使用前确认页面引用了commonApi.js
        this.commonApi = commonApi;
    },
    /**
     *按照id查询详细人才信息
     * @param {*} paramObj
     */
    getBriefInfoById: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "briefInfo-briefInfo-getBriefInfoById",
                model: paramObj.model
            },
            success: function (res) {
                if (typeof paramObj.success === "function") {
                    paramObj.success(res);
                }
            },
            fail: function (res) {
                if (typeof paramObj.fail === "function") {
                    paramObj.fail(res);
                } else {
                    this.commonApi.alertMsg('添加检索信息失败');
                }
            },
            complete: function (res) {
                if (typeof paramObj.complete === "function") {
                    paramObj.complete(res);
                } else {

                }
            }
        })
    },
    /**
     *查询详细人才信息列表
     * @param {*} paramObj
     */
    getBriefInfoPageList: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "briefInfo-briefInfo-getBriefInfoPageList",
                model: paramObj.model
            },
            success: function (res) {
                if (typeof paramObj.success === "function") {
                    paramObj.success(res);
                }
            },
            fail: function (res) {
                if (typeof paramObj.fail === "function") {
                    paramObj.fail(res);
                } else {
                    this.commonApi.alertMsg('修改检索信息失败');
                }
            },
            complete: function (res) {
                if (typeof paramObj.complete === "function") {
                    paramObj.complete(res);
                } else {

                }
            }
        })
    }
}