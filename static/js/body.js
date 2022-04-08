document.write(`
        
    <!-- Requiere IP -->

    <div class="container">
    <!-- Modal for rendering the charts, declare this if you want to render charts, 
    else you remove the modal -->
    <div id="modal1" class="modal">
    <canvas id="modal-chart"></canvas>
    </div>

    <!--chatbot widget -->
    <div class="widget">
    <div class="chat_header">
        <!--Add the name of the bot here -->
        <span class="chat_header_title">Sara</span>
        <span class="dropdown-trigger" href="#" data-target="dropdown1">
        <i class="material-icons"> more_vert </i>
        </span>

        <!-- Dropdown menu-->
        <ul id="dropdown1" class="dropdown-content">
        <li><a href="#" id="clear">Clear</a></li>
        <li><a href="#" id="restart">Restart</a></li>
        <li><a href="#" id="close">Close</a></li>
        </ul>
    </div>

    <!--Chatbot contents goes here -->
    <div class="chats" id="chats">
        <div class="clearfix"></div>
    </div>

    <!--keypad for user to type the message -->
    <div class="keypad">
        <textarea
        id="userInput"
        placeholder="Type a message..."
        class="usrInput"
        ></textarea>
        <div id="sendButton">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        </div>
    </div>
    </div>

    <!--bot profile-->
    <div class="profile_div" id="profile_div">
    <img class="imgProfile" src="http://209.94.59.153:81/files/cdn-pruebas/static/img/botAvatar.png" />
    </div>

    <!-- Bot pop-up intro -->
    <div class="tap-target" data-target="profile_div">
    <div class="tap-target-content">
        <h5 class="white-text">Hey there 👋</h5>
        <p class="white-text">
        I can help you get started with Rasa and answer your technical
        questions.
        </p>
    </div>
    </div>
    </div>


    <!--JavaScript at end of body for optimized loading-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script
    type="text/javascript"
    src="http://209.94.59.153:81/files/cdn-pruebas/static/js/lib/materialize.min.js"
    ></script>
    <script src="http://209.94.59.153:81/files/static/js/lib/uuid.min.js"></script>
    <!--Main Script -->
    <script type="text/javascript" src="http://209.94.59.153:81/files/cdn-pruebas/static/js/script.js"></script>

    <!--Chart.js Script -->
    <script type="text/javascript" src="http://209.94.59.153:81/files/cdn-pruebas/static/js/lib/chart.min.js"></script>
    <script type="text/javascript" src="http://209.94.59.153:81/files/cdn-pruebas/static/js/lib/showdown.min.js"></script>

`);