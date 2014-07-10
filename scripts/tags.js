//javascript document
//here html = 1 line = 1
//so on
function query(){
    $('.query').fadeIn('slow');
}

$('document').ready(function(){
    $('button').click(function(){
        $('.query').fadeOut('fast');
    });
    $('#tag11').click(function(){ 
        query(); 
        $('.queryresult').html("<u>DOCTYPE</u><br>Decleration Type for HTML files.<br>This is not a HTML tag.");
    });
    $('#tag12,#tag10').click(function(){ 
        query(); 
        $('.queryresult').html("<u>HTML tags</u><br>Starting Tag.<br>'lang' is ISO 639-1 defines abbreviations for languages.");
    });
    $('#tag13').click(function(){ 
        query(); 
        $('.queryresult').html("<u>Meta Charset</u><br>It is in HTML5, and replaces the need for: &lt;meta http-equiv='Content-Type' content='text/html; charset=UTF-8'&gt;.");
    });
    $('#tag14,#tag16,#tag21,#tag26').click(function(){ 
        query(); 
        $('.queryresult').html("<u>HEAD tags</u><br>The <head> element must include a title for the document, and can include scripts, styles, meta information, and more.");
    });
    $('#tag15,#tag22').click(function(){ 
        query(); 
        $('.queryresult').html("<u>title tag</u><br>Show the title of the page in tab of browser.");
    });
    $('#tag17,#tag19').click(function(){ 
        query(); 
        $('.queryresult').html("<u>body tag</u><br>The &lt;body&gt; element contains all the contents of an HTML document, such as text, hyperlinks, images etc.");
    });
    $('#tag23').click(function(){ 
        query(); 
        $('.queryresult').html("<u>meta tag</u><br>The meta viewport tag in <head> specifies how the browser should control the page zoom level and dimensions.");
    });
    $('#tag24').click(function(){ 
        query(); 
        $('.queryresult').html("<u>link tag</u><br>The &lt;link&gt; tag defines the relationship between a document and an external resource.");
    });
    $('#tag18').click(function(){ 
        query(); 
        $('.queryresult').html("A division with class 'hello'. This is the division by using it we are going to print 'Hello' on screen.");
    });
    $('#tag221').click(function(){ 
        query(); 
        $('.queryresult').html("A CSS style with class 'hello'. We use dot (.) operator to acces the class.");
    });
    $('#tag222').click(function(){ 
        query(); 
        $('.queryresult').html("CSS class start parantesis. It starts the class to add properties such as with, height, background color etc.");
    });
    $('#tag223').click(function(){ 
        query(); 
        $('.queryresult').html(" Assign 100 Pixels width to 'hello' class.");
    });
    $('#tag224').click(function(){ 
        query(); 
        $('.queryresult').html(" Assign 100 Pixels height to 'hello' class.");
    });
    $('#tag225').click(function(){ 
        query(); 
        $('.queryresult').html(" Assign Red color to background to class 'hello' which has dimension of 100 PX x 100PX.");
    });
    $('#tag226').click(function(){ 
        query(); 
        $('.queryresult').html("'hello' class closing paranthesis to end the class. This parannthesic end the class.");
    });
    $('#tag31').click(function(){ 
        query(); 
        $('.queryresult').html("head tag of the html files.");
    });
    $('#tag33').click(function(){ 
        query(); 
        $('.queryresult').html("Integration of Javascript into our main html file.");
    });
    $('#tag35').click(function(){ 
        query(); 
        $('.queryresult').html("Closing head tag in HTML file. We've integrated the JS file in our application.");
    });
    
});

