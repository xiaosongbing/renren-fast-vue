/**
 * 开发环境
 */
; (function () {
  window.SITE_CONFIG = {};

  //用户http请求模板
  // {
  //   "http-get请求" : {
  //     "prefix": "httpget",
  //       "body": [
  //         "this.\\$http({",
  //         "url: this.\\$http.adornUrl(''),",
  //         "method: 'get',",
  //         "params: this.\\$http.adornParams({})",
  //         "}).then(({ data }) => { });",
  //       ],
  //         "description": "httpGET请求"
  //   },
  //   "http-post请求" : {
  //     "prefix": "httppost",
  //       "body": [
  //         "this.\\$http({",
  //         "url: this.\\$http.adornUrl(''),",
  //         "method: 'post',",
  //         "data: this.\\$http.adornData(data, false)",
  //         "}).then(({data}) => { });"
  //       ],
  //         "description": "httpPOST请求"
  //   }
  // }

  // api接口请求地址
  // window.SITE_CONFIG['baseUrl'] = 'http://localhost:8080/renren-fast';
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:88/api'; //给网关发送请求

  // cdn地址 = 域名 + 版本号
  window.SITE_CONFIG['domain'] = './'; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl'] = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
