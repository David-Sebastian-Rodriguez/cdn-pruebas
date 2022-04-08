let IP = "http://209.94.59.153:81/files/cdn-pruebas/"

/* module for importing other js files */
function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include(IP+'static/js/lib/jquery.min.js');
include(IP+'static/js/lib/materialize.min.js');
include(IP+'static/js/lib/chart.min.js');
include(IP+'static/js/lib/uuid.min.js');
