$(function() {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // var h = window.screen.height;
    var w = window.screen.width;
    reorganize(w);

    window.onresize = function(){
        // var h = window.screen.height;
        var w = window.screen.width;
        //alert(w+"x"+h);
        reorganize(w);
    }

    var controller = new ScrollMagic.Controller();

    // About
    var tweenAboutTitle = new TweenMax.from("#_about_title", 1, {
        opacity: 0,
        x: 200,
        ease: Power4.easeInt
    });
    var tweenAboutIllus = new TweenMax.from("._about_illustration", 1, {
        opacity: 0,
        y: -100,
        ease: Power4.easeInt
    });
    var tweenAboutText = new TweenMax.from("._about_text", 1, {
        opacity: 0,
        x: -100,
        ease: Power4.easeIntOut
    });

    // Team
    var tweenTeamTitle = new TweenMax.from("#_team_title", 1, {
        opacity: 0,
        x: 100,
        ease: Power4.easeInt
    });
    var tweenTeamIllus = new TweenMax.from("._team_illustration", 1, {
        opacity: 0,
        y: -100,
        ease: Power4.easeInt
    });
    var tweenTeamItem = new TweenMax.staggerFrom("._team_item", 1, {
        x: -100,
        rotation: -10,
        opacity: 0,
        ease: Power4.ease
    }, 0.2);

    // Project
    var tweenProjectTitle = new TweenMax.from("#_project_title", 1, {
        opacity: 0,
        x: 100,
        ease: Power4.easeInt
    });
    var tweenProjectIllus = new TweenMax.from("._project_illustration", 1, {
        opacity: 0,
        y: -100,
        ease: Power4.easeInt
    });
    var tweenProjectItem = new TweenMax.staggerFrom("._project_item", 1, {
        y: -100,
        rotation: -10,
        opacity: 0,
        ease: Power4.ease
    }, 0.2);

    // Contact
    var tweenContactTitle = new TweenMax.from("#_contact_title", 1, {
        opacity: 0,
        x: 100,
        ease: Power4.easeInt
    });

    var tweenContactIllus = new TweenMax.from("._contact_illustration", 1, {
        opacity: 0,
        y: -100,
        ease: Power4.easeInt
    });
    var tweenContactItem = new TweenMax.staggerFrom("._contact_item", 1, {
        y: -100,
        rotation: -10,
        opacity: 0,
        ease: Power4.ease
    }, 0.2);


    // Anime on scroll
    // Team
    var sceneTeamTitle = new ScrollMagic.Scene({
        triggerElement: "#_team_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenTeamTitle).addTo(controller);

    var sceneTeamIllus = new ScrollMagic.Scene({
        triggerElement: "#_team_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenTeamIllus).addTo(controller);

    var sceneTeamItem = new ScrollMagic.Scene({
        triggerElement: "#_team_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenTeamItem).addTo(controller);

    // Project
    var sceneProjectTitle = new ScrollMagic.Scene({
        triggerElement: "#_project_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenProjectTitle).addTo(controller);

    var sceneProjectIllus = new ScrollMagic.Scene({
        triggerElement: "#_project_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenProjectIllus).addTo(controller);

    var sceneProjectItem = new ScrollMagic.Scene({
        triggerElement: "#_project_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenProjectItem).addTo(controller);

    // Contact
    var sceneContactTitle = new ScrollMagic.Scene({
        triggerElement: "#_contact_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenContactTitle).addTo(controller);

    var sceneContactIllus = new ScrollMagic.Scene({
        triggerElement: "#_contact_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenContactIllus).addTo(controller);

    var sceneContactItem = new ScrollMagic.Scene({
        triggerElement: "#_contact_box"
    }).triggerHook(0.6).reverse(true).setTween(tweenContactItem).addTo(controller);
});

function reorganize(w){
    // alert(w);
    if(w<=860){
        $("#_navbar").fadeOut();
        $("#_big_div").removeClass("ms-5");
    } else{
        $("#_navbar").fadeIn();
        $("#_big_div").addClass("ms-5");
    }
}