/**
 * Created by Administrator on 2018/7/17 0017.
 */

var fxOnReady = function () {
    var body = document.getElementsByTagName('body')[0];
    if (body) {
        body.setAttribute("chrome-ext-status","installed");
    }

}

if (document.readyState !== 'loading') {
    fxOnReady();
} else {
    document.addEventListener('DOMContentLoaded', fxOnReady);
}