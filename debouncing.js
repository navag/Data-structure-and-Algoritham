var callApi = (id) => {
    console.log(`${id}from api res`)
}

var debounce = (fn,d) => {
    var timer;
return function() {
    var context = this
    var arg = arguments
    clearTimeout(timer)
   timer = setTimeout(() => {
        fn.apply(context,arg)
    },d)
}
}

var dbc = debounce(callApi,300)

dbc(3)
dbc(3)
dbc(3)
// callApi()
// callApi()
// callApi()