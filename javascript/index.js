document.addEventListener("DOMContentLoaded", function () {
    console.log("the page has been loaded")

    document.getElementById("resumebtn").addEventListener('click',function(){
        window.open('Assets/Happiness Mwita Khalan CV.pdf (1).pdf', '_blank')
    });

    function showDownloadAlert(){
        alert("resume has been downloaded")
    }

    document.getElementById("resumedwnld").addEventListener('click',function(){
        const link = document.createElement('a');
        link.href ='Assets/Happiness Mwita Khalan CV.pdf (1).pdf'
        link.download = 'Assets/Happiness Mwita Khalan CV.pdf (1).pdf'

        document.body.appendChild(link)

        link.click()

        document.body.removeChild(link)

        showDownloadAlert();
    });
});