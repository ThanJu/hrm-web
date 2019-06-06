
var expectedPositionAjax = {
    commonApi:null,
    newCommonApi:function(commonApi){
        //使用前确认页面引用了commonApi.js
        this.commonApi = commonApi;
    },
    /**
     *获取各类行业的人才数量
     * @param {*} paramObj
     */
    getIndustryCount: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "expectedPosition-expectedPosition-getIndustryCount",
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
                    this.commonApi.alertMsg('获取各类岗位的人才数量失败');
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
     *获取各类岗位的人才数量
     * @param {*} paramObj
     */
    getPostCount: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "expectedPosition-expectedPosition-getPostCount",
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
                    this.commonApi.alertMsg('获取各类岗位的人才数量失败');
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
     *获取各类状态的人才数量
     * @param {*} paramObj
     */
    getStatusCount: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "expectedPosition-expectedPosition-getStatusCount",
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
                    this.commonApi.alertMsg('获取各类状态的人才数量失败');
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
     *添加期望职位
     * @param {*} paramObj
     */
    addExpectedPosition: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "expectedPosition-expectedPosition-addExpectedPosition",
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
                    this.commonApi.alertMsg('添加期望职位失败');
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
     *修改期望职位
     * @param {*} paramObj
     */
    modifyExpectedPosition: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "expectedPosition-expectedPosition-modifyExpectedPosition",
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
                    this.commonApi.alertMsg('修改期望职位失败');
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