const assert = require( 'assert' ).strict;
const { describe, it, afterEach } = require( 'mocha' );
const { resCode } = require( '../index' );


describe( 'ResponseStatus', function () {


    const res = {
        statusCode: null,
        status( code ) {
            this.statusCode = code;
        }
    }

    afterEach( () => res.statusCode = null );

    it( 'setOk', function ( done ) {

        resCode.setOk( res );

        assert.deepStrictEqual( res.statusCode, 200 );
        done();
    } );

} );
