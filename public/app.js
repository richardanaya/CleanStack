require.config({
    paths: {
        'text':'libs/requirejs/require-text'
    }
})
requirejs(['text!templates/helloworld.html'], function(tmplHelloWorld){
    $(document.body).append(tmplHelloWorld);
});