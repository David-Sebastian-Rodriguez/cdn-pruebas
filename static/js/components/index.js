let IP = "http://209.94.59.153:81/files/"
function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include(IP+'static/js/components/chat.js');
include(IP+'static/js/constants.js');
include(IP+'static/js/components/cardsCarousel.js');
include(IP+'static/js/components/botTyping.js');
include(IP+'static/js/components/charts.js');
include(IP+'static/js/components/collapsible.js');
include(IP+'static/js/components/dropDown.js');
include(IP+'static/js/components/location.js');
include(IP+'static/js/components/pdfAttachment.js');
include(IP+'static/js/components/quickReplies.js');
include(IP+'static/js/components/suggestionButtons.js');
