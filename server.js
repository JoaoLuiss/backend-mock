const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )

const server = ronin.server()

server.use( '/', mocks.server( server.Router(), false, true) )

if ( server.start() ) {   
    console.log("Hello world! \n(Server is listening to url \"http://localhost:8000/test\")")
}

/*
Mandar um request tipo POST para inserir dados:
    curl --request POST --url http://localhost:8000/test --header 'content-type: application/json' --data '{"msg": "testing"}'
Mandar um request tipo GET para acessar aquilo que foi inserido:
    curl http://localhost:8000/test
*/