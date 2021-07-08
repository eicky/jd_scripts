/*
晚上12点开始 先用几个号测试下有没有豆子 网站现在大姨妈了打不开
入口
*/
const $ = new Env('柠檬开卡1');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
let tytpacketId = '';
if (process.env.tytpacketId) {
  tytpacketId = process.env.tytpacketId;
}
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
const JD_API_HOST = 'https://api.m.jd.com/client.action';

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }

  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      ck2 = cookiesArr[0];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
     
      
     
      
     
      

    }
  }
  $.log("总共账号："+cookiesArr.length)
  $.log("正在为一号位助力")
  await gettoken()
  $.log("一号位助力码："+zhuhao)
  await gettoken1()
})()
  .catch((e) => {
    $.log('', `? ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })
  
async function dotask() {
                    await $.wait(5000)
                    await follow()
                    await OpenCard(1000004123)
                    await OpenCard(1000365666)
                    await OpenCard1(1000365666)
                    await OpenCard(10362686)
                    await OpenCard1(10362686)
                    await OpenCard(1000001947)
                    await OpenCard1(1000001947)
                    await OpenCard(1000001391)
                    await OpenCard1(1000001391)
                    await OpenCard(689909)
                    await OpenCard1(689909)
                    await OpenCard(1000088382)	
                    await OpenCard(1000016162)
                    await OpenCard1(1000016162)
                    await OpenCard(1000337499)	
                    await OpenCard(1000015268)
                    await OpenCard1(1000015268)
                    await OpenCard(1000001683)	
                    await OpenCard(1000310642)	
                    await OpenCard(1000370907)
                    await OpenCard1(1000370907)
                    await OpenCard(65900)
                    await OpenCard1(65900)
                    await OpenCard(1000337499)
                    await OpenCard1(1000337499)
                    await OpenCard(1000088382)
                    await OpenCard1(1000088382)
                    await checkcard(1000365666)
                    await checkcard(1000370907)
                    await checkcard(1000088382)
                    await checkcard(10362686)
                    await checkcard(1000001391)
                    await checkcard(689909)
                    await checkcard(1000016162)
                    await checkcard(1000337499)
                    await checkcard(1000001683)
                    await checkcard(1000310642)
                    await checkcard(1000001947)
                    await checkcard(1000015268)
                    await checkcard(65900)
                    await checkcard(1000004123)
                    await checkcard(1000365666)
                    await $.wait(5000)
                    await addCart()
}  
  
 async function helpdotask() {
                    await $.wait(5000)
                    await follow1()
                    await OpenCard2(1000004123)
                    await OpenCard2(1000365666)
                    await OpenCard11(1000365666)
                    await OpenCard2(10362686)
                    await OpenCard11(10362686)
                    await OpenCard2(1000001947)
                    await OpenCard11(1000001947)
                    await OpenCard2(1000001391)
                    await OpenCard11(1000001391)
                    await OpenCard2(689909)
                    await OpenCard11(689909)
                    await OpenCard2(1000088382)	
                    await OpenCard2(1000016162)
                    await OpenCard11(1000016162)
                    await OpenCard2(1000337499)	
                    await OpenCard2(1000015268)
                    await OpenCard11(1000015268)
                    await OpenCard2(1000001683)	
                    await OpenCard2(1000310642)	
                    await OpenCard2(1000370907)
                    await OpenCard11(1000370907)
                    await OpenCard2(65900)
                    await OpenCard11(65900)
                    await OpenCard2(1000337499)
                    await OpenCard11(1000337499)
                    await OpenCard2(1000088382)
                    await OpenCard11(1000088382)
                    await checkcard1(1000365666)
                    await checkcard1(1000370907)
                    await checkcard1(1000088382)
                    await checkcard1(10362686)
                    await checkcard1(1000001391)
                    await checkcard1(689909)
                    await checkcard1(1000016162)
                    await checkcard1(1000337499)
                    await checkcard1(1000001683)
                    await checkcard1(1000310642)
                    await checkcard1(1000001947)
                    await checkcard1(1000015268)
                    await checkcard1(65900)
                    await checkcard1(1000004123)
                    await checkcard1(1000365666)
                    await $.wait(5000)
                    await addCart1()
} 
function gettoken() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://api.m.jd.com/client.action?functionId=isvObfuscator`,

    body: `adid=F108E1B6-8E30-477C-BE54-87CF23435488&area=17_1458_1463_43894&body=%7B%22url%22%3A%22https%3A%5C/%5C/mpdz1-isv.isvjcloud.com%5C/h5%5C/?lng%3D106.286867%26lat%3D29.969149%26sid%3D1c98c3013bd5808a5977e0f9d5f5272w%26un_area%3D17_1458_1463_43894%23%5C/pages%5C/unitedCard20210707%5C/unitedCard20210707?id%3D2021032600%22%2C%22id%22%3A%22%22%7D&build=167650&client=apple&clientVersion=9.5.2&d_brand=apple&d_model=iPhone9%2C2&eid=eidIe2798122d1s4GEix/uspRjy92JqJ273YghhIs3JZdi/4JjftGCWZOLgY3glC5gGXsTY1vGLRKckMeHq2opKqTBNLiayOHJtx2EhExIqlbarZpTFa&isBackground=N&joycious=55&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=6898c30638c55142969304c8e2167997fa59eb53&osVersion=14.3&partner=apple&rfs=0000&scope=01&screen=1242%2A2208&sign=4fce8a475116be5ed3a9875073aad6f1&st=1625722954330&sv=120&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJapWshXZ/Tn6fNAQIDaR0fVVaw/ZQEQl%2BX%2BrqxdLHBH8IZ6Z/34M%2BEzZCixjWvrnqgI175OBOsDSGYP5JFEP4ZG0g2tr0lefUmoFPI5N%2B%2BKFwdU6N8/xYaMtC0jjfr2zj0VM7rh2mr%2BgFRAQX0x7vw68XZlzCzz%2BL7OKiTjN3PcO3nk9j97VHTQ%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=c2a9f95ef52c660981ceeb8aa90bd627`,
headers: {

"Host": "api.m.jd.com",
"User-Agent": "JD4iPhone/167650 (iPhone; iOS 14.3; Scale/3.00)",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",
      "Cookie": ck2,
      }
                }
     
        $.post(options, async (err, resp, data) => {
            
            try {

                    data = JSON.parse(data);
                    
                    if(data.errcode == 0){
                    $.tk = data.token
                    $.log($.tk)
                    await getnick()
                }else if(data.errcode !== 0){
                
                    console.log("token获取失败或者黑号 请过5分钟再试")}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function getnick() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/getFansInfo`,

    body: `{"data":"${$.tk}","source":"01","actId":"2021032600","method":"/ql/front/getFansInfo","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                    $.nick = data.msg
                    zhuhao = data.msg
                    $.log($.nick)
                    await dotask()
                }else if(data.succ !== true){
                
                    console.log("NICK获取失败或者黑号 请过5分钟再试")}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function gettoken1() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://api.m.jd.com/client.action?functionId=isvObfuscator`,

    body: `adid=F108E1B6-8E30-477C-BE54-87CF23435488&area=17_1458_1463_43894&body=%7B%22url%22%3A%22https%3A%5C/%5C/mpdz1-isv.isvjcloud.com%5C/h5%5C/?lng%3D106.286867%26lat%3D29.969149%26sid%3D1c98c3013bd5808a5977e0f9d5f5272w%26un_area%3D17_1458_1463_43894%23%5C/pages%5C/unitedCard20210707%5C/unitedCard20210707?id%3D2021032600%22%2C%22id%22%3A%22%22%7D&build=167650&client=apple&clientVersion=9.5.2&d_brand=apple&d_model=iPhone9%2C2&eid=eidIe2798122d1s4GEix/uspRjy92JqJ273YghhIs3JZdi/4JjftGCWZOLgY3glC5gGXsTY1vGLRKckMeHq2opKqTBNLiayOHJtx2EhExIqlbarZpTFa&isBackground=N&joycious=55&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=6898c30638c55142969304c8e2167997fa59eb53&osVersion=14.3&partner=apple&rfs=0000&scope=01&screen=1242%2A2208&sign=4fce8a475116be5ed3a9875073aad6f1&st=1625722954330&sv=120&uemps=0-0&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJapWshXZ/Tn6fNAQIDaR0fVVaw/ZQEQl%2BX%2BrqxdLHBH8IZ6Z/34M%2BEzZCixjWvrnqgI175OBOsDSGYP5JFEP4ZG0g2tr0lefUmoFPI5N%2B%2BKFwdU6N8/xYaMtC0jjfr2zj0VM7rh2mr%2BgFRAQX0x7vw68XZlzCzz%2BL7OKiTjN3PcO3nk9j97VHTQ%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=c2a9f95ef52c660981ceeb8aa90bd627`,
headers: {

"Host": "api.m.jd.com",
"User-Agent": "JD4iPhone/167650 (iPhone; iOS 14.3; Scale/3.00)",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",
      "Cookie": cookie,
      }
                }
     
        $.post(options, async (err, resp, data) => {
           $.log("正在为："+zhuhao+"助力") 
            try {

                    data = JSON.parse(data);
                    
                    if(data.errcode == 0){
                    $.tk = data.token
                    $.log($.tk)
                    await getnick1()
                }else if(data.errcode !== 0){
                
                    console.log("token获取失败或者黑号 请过5分钟再试")}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function getnick1() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/getFansInfo`,

    body: `{"data":"${$.tk}","source":"01","actId":"2021032600","method":"/ql/front/getFansInfo","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log("正在为："+zhuhao+"助力")
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                    $.nick = data.msg
                    
                    $.log($.nick)
                   await helpdotask()
                }else if(data.succ !== true){
                
                    console.log("NICK获取失败或者黑号 请过5分钟再试")}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}
function follow() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"favouriteShop","isSendAward":0,"target":"","channel":"app","inviterNick":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": ck2,
      }
                }
      
        $.post(options, async (err, resp, data) => {
          $.log(data)
          
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}


function addCart() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"addCart","isSendAward":0,"target":"","channel":"app","inviterNick":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": ck2,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log(data)
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function OpenCard(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": ck2,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log(data)
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}
function OpenCard1(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${target}","bindByVerifyCodeFlag":1,"registerExtend":{"v_sex":"未知"},"writeChildFlag":0,"activityId":1433388,"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1625725641571_22811`,

    //body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {

"Host": "api.m.jd.com",
"Origin": "https://api.m.jd.com/",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),


      "Cookie": ck2,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            
            try {

                   
                    $.log(data)

            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function checkcard(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": ck2,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log(data)
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log("Check OpenCard: "+data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}


function follow1() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"favouriteShop","isSendAward":0,"target":"","channel":"app","inviterNick":"${zhuhao}","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
          $.log(data)
          $.log("正在为："+zhuhao+"助力")
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}


function addCart1() {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"addCart","isSendAward":0,"target":"","channel":"app","inviterNick":"${zhuhao}","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log("正在为："+zhuhao+"助力")
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function OpenCard2(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log(data)
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log(data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}
function OpenCard11(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={"venderId":"${target}","bindByVerifyCodeFlag":1,"registerExtend":{"v_sex":"未知"},"writeChildFlag":0,"activityId":1433388,"channel":401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1625725641571_22811`,

    //body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {

"Host": "api.m.jd.com",
"Origin": "https://api.m.jd.com/",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),


      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            
            try {

                   
                    $.log(data)

            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function checkcard1(target) {
    return new Promise(async (resolve) => {

                let options = {
    url: `https://mpdz1-isv.isvjcloud.com/ql/front/participantBehavior`,

    body: `{"actId":"2021032600","buyerNick":"${$.nick}","behavior":"isOpenCard","target":"${target}","channel":"","method":"/ql/front/participantBehavior","userId":""}`,
headers: {
"Host": "mpdz1-isv.isvjcloud.com",
"Accept": "application/json",
"X-Requested-With": "XMLHttpRequest",

"Content-Type": "application/json; charset=utf-8",
"Origin": "https://mpdz1-isv.isvjcloud.com",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
"Connection": "keep-alive",
"Referer": "https://mpdz1-isv.isvjcloud.com/h5/?lng=106.286867&lat=29.969149&sid=1c98c3013bd5808a5977e0f9d5f5272w&un_area=17_1458_1463_43894",

      "Cookie": cookie,
      }
                }
      
        $.post(options, async (err, resp, data) => {
            $.log(data)
            try {

                    data = JSON.parse(data);
                    if(data.succ == true){
                   
                    $.log("Check OpenCard: "+data.errorMsg)
                    
                }else if(data.succ == false){
                
                    console.log(data.errorMsg)}
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}









async function taskPostUrl(functionId,body) {
  return {
    url: `${JD_API_HOST}`,
    body: `functionId=${functionId}&body=${escape(JSON.stringify(body))}&client=wh5&clientVersion=1.0.0&appid=content_ecology&uuid=6898c30638c55142969304c8e2167997fa59eb54&t=1622588448365`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Accept-Language': 'zh-cn',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}


async function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === 0) {
              $.nickName = (data["base"] && data["base"].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
async function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`??${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============??系统通知??=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`??${this.name}, 错误!`,t.stack):this.log("",`??${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`??${this.name}, 结束! ?? ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
