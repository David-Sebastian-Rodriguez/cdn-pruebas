function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/chat.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/constants.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/cardsCarousel.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/botTyping.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/charts.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/collapsible.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/dropDown.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/location.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/pdfAttachment.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/quickReplies.js');
include('https://cdn.jsdelivr.net/gh/David-Sebastian-Rodriguez/cdn-pruebas@main/static/js/components/suggestionButtons.js');
