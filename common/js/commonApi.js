var domain = "${localhost_ip}";
//domain = "https://127.0.0.1:8443";
domain = "http://20.1.1.239:8081";
var commonApi = {
    serverApi: {
        url: domain,
        username: "manager0001",
        password: "123456",
        authType: "password",
        openid: "",
        client_id: "hrm_web_manage",
        grant_type: "password",
        faceImg: "",
        activityId: 4,
        authCode:'',
        loginToken: {},
        currentUser: {
            status: "",
            headImg: "",
            qrCode: "",
            nickname: "",
            registerId: ""
        },
        freeSkip: function () {
            var tokenData = commonApi.serverApi.loginToken;
            if (tokenData != undefined && typeof (tokenData.timestamp) != "undefined") {
                var tokenTime = tokenData.timestamp;
                var curTimestamp = new Date().getTime();
                var time = curTimestamp - tokenData.timestamp;
                if (typeof (tokenTime) == "undefined" || time > 7000000) {
                    commonApi.alertMsg("请重新登录");
                    window.location.href = 'login.html';
                }
            } else {
                commonApi.alertMsg("请先登录");
                window.location.href = 'login.html';
            }
        },
        getAuthorization: function () {
            var authorization = "";
            //获取 logintoken的值
            var tokenData = commonApi.serverApi.loginToken;
            if (tokenData != undefined && typeof (tokenData.timestamp) != "undefined") {
                var curTimestamp = new Date().getTime();
                var time = curTimestamp - tokenData.timestamp;
                if (time < 6000000) {
                    authorization = tokenData.token_type + " " + tokenData.access_token;
                } else if (6000000 < time && time < 7000000) {
                    //重新获取token
                    this.login({
                        success: function (res) {

                            if (res.access_token != null) {
                                authorization = res.token_type + " " + res.access_token;
                                return authorization;
                            } else {
                                this.freeSkip();
                            }
                        },
                        fail: function (res) {
                            this.freeSkip();
                        }
                    });
                } else {
                    this.freeSkip();
                }
            }
            return authorization;
        },
        login: function (paramObj) {

            jQuery.ajax({
                url: this.url + "/oauth/token",
                method: 'POST',
                async: false,
                contentType: 'application/x-www-form-urlencoded',
                data: {
                    username: this.username,
                    password: this.password,
                    authType: this.authType,
                    client_id: this.client_id,
                    grant_type: this.grant_type,
                    faceImg: this.faceImg,
                    activityId: this.activityId,
                    openid: this.openid,
                    authCode: this.authCode
                },
                dataType: 'json',
                success: function (res) {

                    if (res.access_token != null) {
                        res.timestamp = new Date().getTime();
                        commonApi.serverApi.loginToken = res;
                        window.localStorage.setItem('commonApi', JSON.stringify(commonApi));
                    }
                    paramObj.success(res);
                },
                fail: function (res) {
                    console.log("fail:", res)
                    paramObj.fail(res);
                }

            });
        },
        requestApi: function (paramObj) {
            jQuery.ajax({
                data: JSON.stringify(paramObj.data),
                url: this.url + '/abs/business',
                method: 'POST',
                // 设置请求的 header
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.getAuthorization()
                },
                dataType: 'json',
                success: function (res) {
                    if (typeof paramObj.success === "function") {
                        paramObj.success(res);
                    }
                    if (!res.status) {
                        paramObj.error = null;
                        if (typeof paramObj.error === "function") {
                            paramObj.error(res);
                        } else {
                            if (res.msg != null && res.msg != "") {
                                var msgStr = res.msg;
                                msgStr = msgStr.substring(msgStr.indexOf(":") + 1, msgStr.length);
                                commonApi.alertMsg(msgStr);
                            }
                        }
                    }
                },
                fail: function (res) {
                    if (typeof paramObj.fail === "function") {
                        paramObj.fail(res);
                    }
                },
                complete: function (res) {
                    if (typeof paramObj.complete === "function") {
                        paramObj.complete(res);
                    }
                }
            });
        }
    },
    alertMsg: function (msg) {
        //不同平台时，替换不同弹出框控件
        // var html = "<div style='width: 100%;height: 100%;position: fixed;background-color: black;opacity: 0.4'><div style='width: 10%;height:10%;color: #FFFFFF;'>"+msg+"</div></div>";
        // $("body").append(html);
        alert(msg);
    },
    newCommonApi: function () {
        var commonApiObj = JSON.parse(window.localStorage.getItem('commonApi'))
        if (commonApiObj != null) {
            for (var key in commonApiObj.serverApi) {
                commonApi.serverApi[key] = commonApiObj.serverApi[key];
            }
        }
        return commonApi;
    },
    updateCurrentUser: function (paramObj) {
        var commonApiObj = JSON.parse(window.localStorage.getItem('commonApi'))
        if (commonApiObj != null) {
            var currentUser = paramObj.success(commonApiObj.serverApi.currentUser);
            commonApiObj.serverApi.currentUser = currentUser;
            window.localStorage.setItem('commonApi', JSON.stringify(commonApiObj));
        }
        return commonApi;
    }
}

if (window.location.pathname.indexOf("login.html") < 0) {
    var commonApiFun = commonApi.newCommonApi();
    //commonApiFun.serverApi.freeSkip();
}