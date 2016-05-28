requirejs.config({
    baseUrl: "",
    paths: {
        "jquery": "js/lib/jquery-2.2.1",
        "bootstrap": "js/lib/bootstrap",
        "modules": "modules/"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "bootstrap": {
            "deps": ['jquery']
        }
    },
    deps: ['js/main']
});