
var configIndustryAjax = {
    commonApi:null,
    newCommonApi:function(commonApi){
        //使用前确认页面引用了commonApi.js
        this.commonApi = commonApi;
    },
    /**
     *添加行业参数配置
     * @param {*} paramObj
     */
    addConfigIndustry: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "configIndustry-configIndustry-addConfigIndustry",
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
                    this.commonApi.alertMsg('添加行业参数配置失败');
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
     *修改行业参数配置
     * @param {*} paramObj
     */
    modifyConfigIndustry: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "configIndustry-configIndustry-modifyConfigIndustry",
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
                    this.commonApi.alertMsg('修改行业参数配置失败');
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
     *转移人才行业
     * @param {*} paramObj
     */
    transferTalentsIndustry: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "configIndustry-configIndustry-transferTalentsIndustry",
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
                    this.commonApi.alertMsg('转移人才行业失败');
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
     *查询翻页行业列表
     * @param {*} paramObj
     */
    fetchConfigIndustryPageList: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "configIndustry-configIndustry-fetchConfigIndustryPageList",
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
                    this.commonApi.alertMsg('查询翻页行业列表失败');
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