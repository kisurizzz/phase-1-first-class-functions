function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return testFunct = () => console.log("i love pizza")
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("i love cake")
    }
}