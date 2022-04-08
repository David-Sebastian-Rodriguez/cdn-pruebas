
/* module for importing other js files */
function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@latest/static/js/lib/jquery.min.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@latest/static/js/lib/materialize.min.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@latest/static/js/lib/chart.min.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@latest/static/js/lib/uuid.min.js');
