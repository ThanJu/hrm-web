
var baseInfoAjax = {
    commonApi:null,
    newCommonApi:function(commonApi){
        //使用前确认页面引用了commonApi.js
        this.commonApi = commonApi;
    },
    /**
     *添加基本信息
     * @param {*} paramObj
     */
    addBaseInfo: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "baseInfo-baseInfo-addBaseInfo",
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
                    this.commonApi.alertMsg('添加基本信息失败');
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
     *修改基本信息
     * @param {*} paramObj
     */
    modifyBaseInfo: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "baseInfo-baseInfo-modifyBaseInfo",
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
                    this.commonApi.alertMsg('修改基本信息失败');
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
     *保存个人优势
     * @param {*} paramObj
     */
    savePersonalStrength: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "baseInfo-baseInfo-savePersonalStrength",
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
                    this.commonApi.alertMsg('保存个人优势失败');
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