(() => {  
  $('.about-modal__close-btn').on("click", function () {
        // this == the link that was clicked
    // var href = $(this).attr("href");
    // alert("You're trying to go to " + href);
  $('.about-modal-form__video').each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  });
});
})();