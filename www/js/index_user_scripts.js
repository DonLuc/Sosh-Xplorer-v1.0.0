(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Campus News */
    $(document).on("click", ".uib_w_14", function(evt)
    {
        /* your code goes here */
        window.location = "http://www.tut.ac.za/News/";
        
    });
     
    $(document).on("click", ".uib_w_50", function(evt)
    {
        /* your code goes here */
        window.location = "http://www.tnc4fet.co.za/our-news";
        
    });
     
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
