function setOk( res ) {
    res.status( 200 );
    return res;
}

function setCreated( res ) {
    res.status( 201 );
    return res;
}

module.exports = {
    setOk,
    setCreated
};

