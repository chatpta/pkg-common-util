/**
 *  The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource.
 *  It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full
 *  response if the content was not changed. Additionally, etags help to prevent simultaneous updates of
 *  a resource from overwriting each other ("mid-air collisions").
 *
 * If the resource at a given URL changes, a new Etag value must be generated. A comparison of them can
 * determine whether two representations of a resource are the same. Etags are therefore similar to fingerprints, a
 * nd might also be used for tracking purposes by some servers. They might also be set to persist indefinitely
 * by a tracking server.
 *
 *  For example, when editing a wiki, the current wiki content may be hashed and put into an Etag header
 *  in the response:
 *
 * ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
 *
 * When saving changes to a wiki page (posting data), the POST request will contain the If-Match header containing
 * the ETag values to check freshness against.
 *
 * If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
 *
 * If the hashes don't match, it means that the document has been edited in-between and a 412 Precondition Failed
 * error is thrown.
 *
 * @param res
 * @param ETag
 * @returns {*}
 */
function setOk200( res, ETag ) {

    res.set( { ETag: ETag } );
    res.status( 200 );

    return res;
}

function setCreated201( res ) {
    res.status( 201 );
    return res;
}

function setBadRequest400ClientError( res ) {
    res.status( 400 );
    return res;
}

module.exports = {
    setOk200,
    setCreated201,
    setBadRequest400ClientError
};

