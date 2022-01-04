const assert = require( 'assert' ).strict;
const { describe, it } = require( 'mocha' );
const comUtil = require( '../index' );


describe( 'CommonUtil test', function () {

    describe( 'Validate function test', function () {

        it( 'isValidUuidString returns true if uuid false otherwise', function ( done ) {
            const input = { one: "1", two: "2", three: "3", four: "4" }
            const expectedOutput = { one: "1", three: "3" }

            const output = comUtil.extractObjectWithProperties( input, [ "one", "three" ] );

            assert.deepStrictEqual( output, expectedOutput );
            done();
        } );
    } );
} );
