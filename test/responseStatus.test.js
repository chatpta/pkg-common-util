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

        const modifiedResObj = resCode.setOk( res );

        assert.deepStrictEqual( res.statusCode, 200 );
        assert.deepStrictEqual( modifiedResObj.statusCode, 200 );
        done();
    } );

    it( 'setCreated', function ( done ) {

        const modifiedResObj = resCode.setCreated( res );

        assert.deepStrictEqual( res.statusCode, 201 );
        assert.deepStrictEqual( modifiedResObj.statusCode, 201 );
        done();
    } );

} );
