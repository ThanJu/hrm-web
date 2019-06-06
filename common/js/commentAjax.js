
var commentAjax = {
    commonApi:null,
    newCommonApi:function(commonApi){
        //使用前确认页面引用了commonApi.js
        this.commonApi = commonApi;
    },
    /**
     *添加评价
     * @param {*} paramObj
     */
    addComment: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "comment-comment-addComment",
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
                    this.commonApi.alertMsg('添加评价失败');
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
     *修改评价
     * @param {*} paramObj
     */
    modifyComment: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "comment-comment-modifyComment",
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
                    this.commonApi.alertMsg('修改评价失败');
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
     *查询翻页评价列表
     * @param {*} paramObj
     */
    fetchCommentPageList: function (paramObj) {

        this.commonApi.serverApi.requestApi({
            data: {
                businessParam: "comment-comment-fetchCommentPageList",
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
                    this.commonApi.alertMsg('查询翻页岗位列表失败');
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