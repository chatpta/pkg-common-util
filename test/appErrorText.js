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

    it( "throwWrongCredentialsError", function ( done ) {

        // Act
        request( testApp( errHandler.throwWrongCredentialsError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "wrong_credentials" );
                done();
            } );
    } );

    it( "throwLoginRequiredError", function ( done ) {

        // Act
        request( testApp( errHandler.throwLoginRequiredError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "login_required" );
                done();
            } );
    } );

    it( "throwRecordNotFoundError", function ( done ) {

        // Act
        request( testApp( errHandler.throwRecordNotFoundError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "record_not_found" );
                done();
            } );
    } );

    it( "throwRecordNotSavedError", function ( done ) {

        // Act
        request( testApp( errHandler.throwRecordNotSavedError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "record_save_failure" );
                done();
            } );
    } );

    it( "throwUpdateFailedError", function ( done ) {

        // Act
        request( testApp( errHandler.throwUpdateFailedError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "update_failed" );
                done();
            } );
    } );

    it( "throwTransactionFailedError", function ( done ) {

        // Act
        request( testApp( errHandler.throwTransactionFailedError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "transaction_failed" );
                done();
            } );
    } );

    it( "throwUsedTokenError", function ( done ) {

        // Act
        request( testApp( errHandler.throwUsedTokenError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "wrong_credentials" );
                done();
            } );
    } );

    it( "throwFileFormatNotSupportedError", function ( done ) {

        // Act
        request( testApp( errHandler.throwFileFormatNotSupportedError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "file_format_not_supported" );
                done();
            } );
    } );

    it( "throwNotAuthorizedError", function ( done ) {

        // Act
        request( testApp( errHandler.throwNotAuthorizedError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "not_authorized" );
                done();
            } );
    } );

    it( "throwBadInputError", function ( done ) {

        // Act
        request( testApp( errHandler.throwBadInputError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error,  "bad_input" );
                done();
            } );
    } );

    it( "throwInputNotUuidError", function ( done ) {

        // Act
        request( testApp( errHandler.throwInputNotUuidError ) )
            .get( '/' )
            .expect( 200 )
            .end( ( err, response ) => {
                if ( err ) return;

                // Assert
                assert( response.status === 200 );
                assert.deepStrictEqual( response?.body?.error, "input_not_uuid"  );
                done();
            } );
    } );
} );
