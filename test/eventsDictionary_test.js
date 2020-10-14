const assert = require('assert');
const sub = require('../services/events/eventsDictionary')

describe('Events dictionary', function(){
    describe('Get Names', function(){
        it('returns dictionary object', () => {
            const dict = sub().getNames();
            assert.ok(dict);
            assert(typeof dict === 'object');
            assert(Object.keys(dict).length > 0)
        })
    })
})