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
    
});

