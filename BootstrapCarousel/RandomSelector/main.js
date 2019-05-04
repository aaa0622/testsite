window.onload=function()
{
    //document.write("Hello JaveScript!");
};

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListItem = $("li").length;
        var randomChindNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("li").eq(randomChindNumber).text());
        if(randomChindNumber === 0)
        {
            $('img[name="img1"]').show(); $('img[name="img2"]').hide();
            $('img[name="img3"]').hide();
        }
        else if(randomChindNumber === 1)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').show();
            $('img[name="img3"]').hide();  
        }
        else if(randomChindNumber === 2)
        {
            $('img[name="img1"]').hide();
            $('img[name="img2"]').hide();
            $('img[name="img3"]').show();
        }
    })
});