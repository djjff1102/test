function show(which)
{
    var pic = document.getElementById("placeholder");
    var source = which.getAttribute("href");
    pic.setAttribute("src",source);
    var title = which.getAttribute("title");
    var showp = document.getElementById("describe");
    showp.childNodes[0].nodeValue = title;
}