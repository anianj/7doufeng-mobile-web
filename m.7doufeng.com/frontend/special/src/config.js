/**
 * @file 路由配置
 * @author ()
 */

define(function (require) {

    return [
        {path: '/index/', action: require('./index')},
        {path: '/sp/', action: require('./sp')}
    ];

});
