const { describe, it } = require( "mocha" );
const request = require( 'supertest' );
const assert = require( 'assert' );
const express = require( 'express' );
const errHandler = require( '../lib/appErrorHandlers' );

function testApp( throwErrorFunction ) {
    const app = express();

    app.use( ( req, res, next ) => {
        throwErrorFunction();
    } );

    app.use( errHandler.appErrorHandler );
    return app;
}

describe( "Application error handler test", function () {


    it( "throwValidationFailureError", function ( done ) {

        // Act
        request( testApp( errHandler.throwValidationFailureError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "validation_failure" );
                done();
            } );
    } );

    it( "throwRecordExistError", function ( done ) {

        // Act
        request( testApp( errHandler.throwRecordExistError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "record_exist" );
                done();
            } );
    } );
} );
