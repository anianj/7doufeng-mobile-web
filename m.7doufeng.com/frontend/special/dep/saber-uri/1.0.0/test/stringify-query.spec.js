/**
 * @file stringify-query spec
 * @author treelite(c.xinle@gmail.com)
 */

define(function (require) {
    
    var stringify = require('saber-uri/util/stringify-query');

    describe('stringify query', function () {

        it('with noraml item', function () {
            var query = {name: 'cxl', age: 10};

            query = stringify(query);
            expect(query).toEqual('name=cxl&age=10');
        });

        it('with array item', function () {
            var query = {name: ['cxl', 'treelite'], age: 10};

            query = stringify(query);
            expect(query).toEqual('name=cxl&name=treelite&age=10');
        });

        it('with null and undefined item', function () {
            var query = {name: null, age: undefined};

            query = stringify(query);
            expect(query).toEqual('name&age=');
        });

        it('decode check', function () {
            var query = {company: ['百度', '淘宝'], address: '北京'};

            query = stringify(query);
            expect(query).toEqual(
                'company=' 
                + encodeURIComponent('百度')
                + '&company='
                + encodeURIComponent('淘宝')
                + '&address='
                + encodeURIComponent('北京')
            );
        });

    });

});
