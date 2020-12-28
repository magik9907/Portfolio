(function(){
    console.log('e');
    
    var p = document.querySelector("head meta[name='google-site-verification']");
    delete p.dataset.reactHelmet;
})();