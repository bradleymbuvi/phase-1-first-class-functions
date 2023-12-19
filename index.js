function receivesAFunction(return_func){
    return return_func()
};


const return_func = ()=> 4+5;


const returnsANamedFunction=()=> {
    return function NamedFunction(){
        4+5
    }
}
const returnsAnAnonymousFunction = ()=> {
    return (function(){return 4+5});
}