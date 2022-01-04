'use strict';
/**
 * These are application level error handlers. All error responses should be send using these functions.
 * These should be use in app.js file, not in controller files.
 */
module.exports = {
    notFound404,
    appErrorHandler,
    throwValidationFailureError,
    throwRecordExistError,
    throwWrongCredentialsError,
    throwLoginRequiredError,
    throwRecordNotFoundError,
    throwRecordNotSavedError,
    throwUpdateFailedError,
    throwTransactionFailedError,
    throwUsedTokenError
}


function notFound404( req, res, next ) {
    res.status( 404 );
    res.send( { error: "not_found" } )
}

function appErrorHandler( err, req, res, next ) {
    switch ( err?.message ) {

        case "Used_Token":
        case "Wrong_Credentials":
            res.send( { error: "wrong_credentials" } )
            break;

        case "Validation_Failure":
            res.send( { error: "validation_failure" } )
            break;

        case "Record_NotSaved":
            res.send( { error: "record_save_failure" } )
            break;

        case "Record_Exist":
            res.send( { error: "record_exist" } )
            break;

        case "Record_NotFound":
            res.send( { error: "record_not_found" } )
            break;

        case "Update_Failed":
            res.send( { error: "update_failed" } )
            break;

        case "Login_Required":
            res.send( { error: "login_required" } )
            break;

        case "Transaction_Failed":
            res.send( { error: "transaction_failed" } )
            break;

        default:
            res.status( 500 );
            res.send( { error: "application_error" } )
    }
}


function throwValidationFailureError() {
    throw new Error( "Validation_Failure" );
}

function throwWrongCredentialsError() {
    throw new Error( "Wrong_Credentials" );
}

function throwRecordExistError() {
    throw new Error( "Record_Exist" );
}

function throwRecordNotFoundError() {
    throw new Error( "Record_NotFound" );
}

function throwRecordNotSavedError() {
    throw new Error( "Record_NotSaved" );
}

function throwLoginRequiredError() {
    throw new Error( "Login_Required" );
}

function throwUpdateFailedError() {
    throw new Error( "Update_Failed" );
}

function throwTransactionFailedError() {
    throw new Error( "Transaction_Failed" );
}

function throwUsedTokenError() {
    throw new Error( "Used_Token" );
}
