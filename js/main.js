$(document).ready(function() {
    var offsetPerc = '90%';
    var bannerMains = $('.banner-main-wrapper');
    for (let i = 0; i < bannerMains.length; i++) { new Waypoint({ element: bannerMains[i], handler: function() { $(this.element).find('.banner-content').addClass('fade-in-top'); }, offset: offsetPerc }) }
    var containerStory = $('.container-story-wrapper');
    for (let i = 0; i < containerStory.length; i++) { new Waypoint({ element: containerStory[i], handler: function() { $(this.element).find('.container-content').addClass('fade-in-left'); }, offset: offsetPerc }) }
    var containerColumn = $('.container-columntext-wrapper');
    for (let i = 0; i < containerColumn.length; i++) {
        new Waypoint({
            element: containerColumn[i],
            handler: function() {
                $(this.element).find('.left-content').addClass('fade-in-left');
                $(this.element).find('.right-content').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var formLarge = $('.form-large-wrapper');
    for (let i = 0; i < formLarge.length; i++) {
        new Waypoint({
            element: formLarge[i],
            handler: function() {
                $(this.element).find('.form-content').addClass('fade-in-top');
                $(this.element).find('.form-container').css({ 'animation-delay': '0.3s' });
                $(this.element).find('.form-container').addClass('fade-in-top');
            },
            offset: offsetPerc
        })
    }
    var bannerShowcase = $('.banner-showcase-wrapper');
    for (let i = 0; i < bannerShowcase.length; i++) { new Waypoint({ element: bannerShowcase[i], handler: function() { $(this.element).find('.banner-content').addClass('fade-in-left'); }, offset: offsetPerc }) }
    var bannerSmall = $('.banner-small-wrapper');
    for (let i = 0; i < bannerSmall.length; i++) { new Waypoint({ element: bannerSmall[i], handler: function() { $(this.element).find('.banner-content').addClass('fade-in-top'); }, offset: offsetPerc }) }
    var bannerMedium = $('.banner-medium-wrapper');
    for (let i = 0; i < bannerMedium.length; i++) {
        new Waypoint({
            element: bannerMedium[i],
            handler: function() {
                $(this.element).find('.icon').addClass('fade-in-right');
                $(this.element).find('.header').addClass('fade-in-left');
                $(this.element).find('.body').addClass('fade-in-left');
            },
            offset: offsetPerc
        })
    }
    var cardLinks = $('.card-links-wrapper').find('.card-content');
    for (let i = 0; i < cardLinks.length; i++) { new Waypoint({ element: cardLinks[i], handler: function() { $(this.element).addClass('fade-in-top'); }, offset: offsetPerc }) }
    var blockBenefits = $('.block-benefits-wrapper').find('.block-wrapper');
    for (let i = 0; i < blockBenefits.length; i++) {
        new Waypoint({
            element: blockBenefits[i],
            handler: function() {
                $('.block-benefits-wrapper .block-wrapper').eq(i).css({ 'animation-delay': (i * 0.2) + 's' });
                $('.block-benefits-wrapper .block-wrapper').addClass('fade-in-top');
            },
            offset: offsetPerc
        })
    }
    var bannerCustom = $('.banner-custom-wrapper');
    for (let i = 0; i < bannerCustom.length; i++) { new Waypoint({ element: bannerCustom[i], handler: function() { $(this.element).find('.banner-content').addClass('fade-in-top'); }, offset: offsetPerc }) }
    var formInline = $('.form-inline-wrapper');
    for (let i = 0; i < formInline.length; i++) {
        new Waypoint({
            element: formInline[i],
            handler: function() {
                $(this.element).find('.form-container').addClass('fade-in-left');
                $(this.element).find('.sidebar-container').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var blockUpgrades = $('.block-upgrades-wrapper').find('.block-wrapper');
    for (let i = 0; i < blockUpgrades.length; i++) { if (i % 2 === 0) { new Waypoint({ element: blockUpgrades[i], handler: function() { $(this.element).addClass('fade-in-left'); }, offset: offsetPerc }) } else { new Waypoint({ element: blockUpgrades[i], handler: function() { $(this.element).addClass('fade-in-right'); }, offset: offsetPerc }) } }
    var blockInline = $('.block-inline-wrapper');
    for (let i = 0; i < blockInline.length; i++) { new Waypoint({ element: blockInline[i], handler: function() { $(this.element).addClass('fade-in-top'); }, offset: offsetPerc }) }
    var bannerSocial = $('.banner-social-wrapper');
    for (let i = 0; i < bannerSocial.length; i++) {
        new Waypoint({
            element: bannerSocial[i],
            handler: function() {
                $(this.element).find('.image-content').addClass('fade-in-left');
                $(this.element).find('.content-wrapper').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var containerSteps = $('.container-steps-wrapper').find('.step-wrapper');
    for (let i = 0; i < containerSteps.length; i++) {
        new Waypoint({
            element: containerSteps[i],
            handler: function() {
                $('.container-steps-wrapper .step-wrapper').eq(i).css({ 'animation-delay': (i * 0.2) + 's' });
                $('.container-steps-wrapper .step-wrapper').addClass('fade-in-top');
            },
            offset: offsetPerc
        })
    }
    var containerPreview = $('.container-preview-wrapper');
    for (let i = 0; i < containerPreview.length; i++) {
        new Waypoint({
            element: containerPreview[i],
            handler: function() {
                $(this.element).find('.desktop-preview-wrapper').addClass('fade-in-left');
                $(this.element).find('.mobile-preview-wrapper').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var containerMobile = $('.container-mobile-preview-wrapper');
    for (let i = 0; i < containerMobile.length; i++) {
        new Waypoint({
            element: containerMobile[i],
            handler: function() {
                $(this.element).find('.mobile-preview-wrapper').addClass('fade-in-left');
                $(this.element).find('.text-content').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var containerDesktop = $('.container-desktop-preview-wrapper');
    for (let i = 0; i < containerDesktop.length; i++) {
        new Waypoint({
            element: containerDesktop[i],
            handler: function() {
                $(this.element).find('.desktop-preview-wrapper').addClass('fade-in-left');
                $(this.element).find('.text-content').addClass('fade-in-right');
            },
            offset: offsetPerc
        })
    }
    var blockTextBorder = $('.block-text-border-wrapper');
    for (let i = 0; i < blockTextBorder.length; i++) { new Waypoint({ element: blockTextBorder[i], handler: function() { $(this.element).find('.block-content').addClass('fade-in-top'); }, offset: offsetPerc }) }
});;
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', { slidesPerView: 1, spaceBetween: 0, slidesPerGroup: 1, centeredSlides: true, roundLengths: true, loop: true, autoplay: { delay: 4000, }, });
    var post = new Swiper('.post-container', { slidesPerView: 'auto', spaceBetween: 10, slidesPerGroup: 1, centeredSlides: true, roundLengths: true, loop: true, });
    let delayDur = $(".progress-bar").data('delay-duration') * 1000;
    var banner = new Swiper('.banner-slider-container', { effect: 'fade', fadeEffect: { crossFade: true }, loop: true, allowTouchMove: true, slidesPerView: 1, autoplay: { delay: delayDur, disableOnInteraction: false, }, pagination: { el: '.swiper-pagination', clickable: true, }, });
    var row = new Swiper('.row-images-wrapper', { autoplay: { delay: 0, disableOnInteraction: false, }, speed: 5000, loop: true, freeMode: true, centeredSlides: true, breakpoints: { 0: { slidesPerView: 2, spaceBetween: 35 }, 768: { slidesPerView: 3 }, 1200: { slidesPerView: 5 } }, });
    $(".swiper-pagination-bullet").each(function(index) {
        let element = $(".swiper-slide[data-swiper-slide-index='" + index + "']").get(0);
        element = $(element).find(".slide-title");
        $(this).append(element);
    });
    $(".swiper-slide .slide-title").remove();
    $(".swiper-pagination-bullet").on('click', function() {});
});;
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var alpha = scrollTop / 200;
    $('.background-scroller').css({ 'background': 'linear-gradient(30deg, rgba(46, 46, 76,' + alpha + '), rgba(11, 11, 34,' + alpha + ')' });
    if (scrollTop == 0) { $('header.no-before').addClass('header-project-overlay'); } else { $('header.no-before').removeClass('header-project-overlay'); }
});;
$(document).ready(function() {
    $("input[name='categoryfilter']").click(function() {
        var radioValue = $(this).attr('id');
        $('.filter-categories label').css({ color: '#c2c2c2' });
        if (this.checked) { $("label[for='" + radioValue + "']").css({ color: '#db5c3a' }); }
    });
    $('input[name="categoryfilter"]').on('change', function() {
        var filter = $('#filter');
        $.ajax({ url: filter.attr('action'), data: filter.serialize(), type: filter.attr('method'), success: function(data) { $('#response').html(data); } });
        return false;
    });
});;
$(document).ready(function() {
    $('.bt-menu').click(function(e) {
        $(this).toggleClass('active');
        if ($(window).scrollTop() == 0) { $('header.no-before').toggleClass('header-project-overlay'); }
        return false;
    });
    let style = "";
    $('.bt-menu').click(function() {
        if ($('.bt-menu').hasClass('active')) {
            style = $('header.header').attr('style');
            $('.header-nav').slideDown();
            $('body').css({ 'overflow-y': 'hidden' });
            $('header.header').attr('style', '');
            $('header.header, header .header-nav').addClass('gray-bg');
        } else {
            $('.header-nav').slideUp();
            $('body').css({ 'overflow-y': 'visible' });
            $('header.header, header .header-nav').removeClass('gray-bg');
            $('header.header').attr('style', style);
        }
    });
});;
$(document).ready(function() {
    $("a[href='#calculator']").click(function() {
        console.log("hello");
        $('html, body').animate({ scrollTop: $("#calculator").offset().top - 59 }, 2000);
    });
});;
$(document).ready(function() {
    if ($("div.block-txtimgpoints-wrapper").length) {
        $(window).on("resize load", function() {
            let windowH = ($(window).height() - 100) / 2;
            let imageH = $(".block-txtimgpoints-wrapper .image").height() / 2;
            let topPerc = (windowH - imageH) + 100;
            $(".sticky-center").css("top", topPerc + "px");
        })
    }
});;
$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var windowWidth = $(window).width();
    var mobileBreak = 992;
    var revealElements = $(".point-wrapper");
    for (var i = 0; i < revealElements.length; i++) { new ScrollMagic.Scene({ triggerElement: revealElements[i], offset: 100, triggerHook: 0.9, }).setClassToggle(revealElements[i], "visible").addTo(controller); }
    var revealBlocks = $(".block-wrapper");
    for (var i = 0; i < revealBlocks.length; i++) { new ScrollMagic.Scene({ triggerElement: revealBlocks[i], offset: 100, triggerHook: 0.9, }).setClassToggle(revealBlocks[i], "visible").addTo(controller); }
    var portfolioBlocks = $(".port-wrapper");
    for (var i = 0; i < portfolioBlocks.length; i++) {
        var tween = new TimelineMax().from(portfolioBlocks[i], 1, { scale: 0.9, opacity: 0.8 }).to(portfolioBlocks[i], 1, { scale: 0.9, opacity: 0.8, delay: 2 });
        new ScrollMagic.Scene({ triggerElement: $('.post-content')[i], triggerHook: "onEnter", duration: "100%", offset: 200 }).setTween(tween).addTo(controller);
    }
    var cardSelectBlocks = $(".card-select-wrapper").find(".post-content");
    for (var i = 0; i < cardSelectBlocks.length; i++) {
        var tween = new TimelineMax().from(cardSelectBlocks[i], 1, { scale: 0.9, opacity: 0.8 }).to(cardSelectBlocks[i], 1, { scale: 0.9, opacity: 0.8, delay: 2 });
        new ScrollMagic.Scene({ triggerElement: cardSelectBlocks[i], triggerHook: "onEnter", duration: "100%", offset: 200 }).setTween(tween).addTo(controller);
    }
    if (windowWidth > mobileBreak) {
        var cardLinks = $(".card-blocks-wrapper .row > div");
        for (var i = 0; i < cardLinks.length; i++) {
            var tween = new TimelineMax().from(cardLinks[i], 1, { scale: 0.9, opacity: 0.8 }).to(cardLinks[i], 1, { scale: 0.9, opacity: 0.8, delay: 2 });
            new ScrollMagic.Scene({ triggerElement: cardLinks[i], triggerHook: 0.8, duration: "80%", }).setTween(tween).addTo(controller);
        }
    } else {
        var cardLinks = $(".card-blocks-wrapper .row > div");
        for (var i = 0; i < cardLinks.length; i++) {
            var tweenTrig = $(this)[i];
            var tween = new TimelineMax().from(cardLinks[i], 0.7, { opacity: 0, yPercent: 50 }).to(cardLinks[i], 1.5, { opacity: 1, yPercent: 0 });
            new ScrollMagic.Scene({ triggerElement: cardLinks[i], duration: '100%', triggerHook: 0.9, }).setTween(tween).addTo(controller);
        }
    }
    $.fn.contentSlide = function() {
        if (!$(this).find(".left-column .points-wrapper").length) {
            $(this).each(function() {
                var slideTrigger = $(this).find(".left-column")[0];
                var leftCol = $(this).find(".left-column");
                var leftColWrap = new TimelineMax();
                leftColWrap.from(leftCol, 2, { xPercent: -5, ease: "none" }).to(leftCol, 1, { xPercent: -0, ease: "none" }).to(leftCol, 3, { xPercent: -10, ease: "none" });
                new ScrollMagic.Scene({ triggerElement: slideTrigger, duration: '200%', triggerHook: 1, }).setTween(leftColWrap).addTo(controller);
            });
        }
        if (!$(this).find(".right-column .points-wrapper").length) {
            $(this).each(function() {
                var slideTrigger = $(this).find(".right-column")[0];
                var rightCol = $(this).find(".right-column");
                var rightColWrap = new TimelineMax();
                rightColWrap.from(rightCol, 2, { xPercent: 5, ease: "none" }).to(rightCol, 1, { xPercent: 0, ease: "none" }).to(rightCol, 3, { xPercent: 10, ease: "none" });
                new ScrollMagic.Scene({ triggerElement: slideTrigger, duration: '200%', triggerHook: 1, }).setTween(rightColWrap).addTo(controller);
            });
        }
    };
    $.fn.contentFade = function() {
        $(this).each(function() {
            var textTrigger = $(this)[0];
            var textSelect = $(this).find(".container-content");
            var iconSelect = $(this).find(".icon");
            var featureWrapper = new TimelineMax();
            featureWrapper.from(textSelect, 2, { xPercent: -10, ease: "none", opacity: 0.3 }).to(textSelect, 0.5, { xPercent: 0, ease: "none", opacity: 1, scale: 1 }).to(textSelect, 3, { xPercent: -10, ease: "none", opacity: 0.3 });
            new ScrollMagic.Scene({ triggerElement: textTrigger, duration: '200%', triggerHook: 1, }).setTween(featureWrapper).addTo(controller);
        });
    };
    $.fn.contentScale = function() {
        $(this).each(function() {
            var textTrigger = $(this)[0];
            var textSelect = $(this).find(".text-content");
            var textWrapper = new TimelineMax();
            textWrapper.from(textSelect, 2, { xPercent: -10, autoAlpha: 0, scale: 0.8 }).to(textSelect, 1, { xPercent: 0, autoAlpha: 1, scale: 1 }).to(textSelect, 2, { xPercent: -10, autoAlpha: 0, scale: 0.8 });
            new ScrollMagic.Scene({ triggerElement: textTrigger, duration: '200%', triggerHook: 1, }).setTween(textWrapper).addTo(controller);
        });
    };
    $.fn.contentScaleTwo = function() {
        $(this).each(function() {
            var textTriggerr = $(this)[0];
            var textSelectt = $(this).find(".banner-content");
            var textWrapperr = new TimelineMax();
            textWrapperr.from(textSelectt, 1, { xPercent: -15, autoAlpha: 0, scale: 0.8 }).to(textSelectt, 2, { xPercent: 0, autoAlpha: 1, scale: 1 }).to(textSelectt, 1, { xPercent: -10, autoAlpha: 0, scale: 0.8 });
            new ScrollMagic.Scene({ triggerElement: textTriggerr, duration: '90%', triggerHook: 0.8, offset: 100 }).setTween(textWrapperr).addTo(controller);
        });
    };
    $.fn.contentSlideSlow = function() {
        $(this).each(function() {
            var slideTrigger = $(this)[0];
            var rightCol = $(this).find(".content-right");
            var rightColWrap = new TimelineMax();
            rightColWrap.from(rightCol, 2, { xPercent: 5, ease: "none" }).to(rightCol, 1, { xPercent: 0, ease: "none" }).to(rightCol, 3, { xPercent: 10, ease: "none" });
            new ScrollMagic.Scene({ triggerElement: slideTrigger, duration: '200%', triggerHook: 1, }).setTween(rightColWrap).addTo(controller);
        });
        $(this).each(function() {
            var slideTrigger = $(this)[0];
            var leftCol = $(this).find(".content-left");
            var leftColWrap = new TimelineMax();
            leftColWrap.from(leftCol, 2, { xPercent: -5, ease: "none" }).to(leftCol, 1, { xPercent: -0, ease: "none" }).to(leftCol, 3, { xPercent: -10, ease: "none" });
            new ScrollMagic.Scene({ triggerElement: slideTrigger, duration: '200%', triggerHook: 1, }).setTween(leftColWrap).addTo(controller);
        });
    };
    if (windowWidth > mobileBreak) {} else { $(".block-txtimgpoints-wrapper").contentSlide(); }
    $(".container-featured-wrapper").contentFade();
    $(".container-payment-calculator-wrapper").contentScale();
    $(".container-image-overlap-wrapper").contentSlideSlow();
    $(".banner-gradient-overlay-wrapper").contentScaleTwo();
});;
$(document).ready(function() {
    const sliderProps = { fill: "#dc5c37", background: "rgba(230, 230, 230, 1)", };
    $.fn.rangeGradient = function() {
        for (var i = 0; i < this.length; i++) {
            let selector = $(this)[i];
            let val = $(selector).val();
            let perc = (100 * ($(selector).val() - $(selector).prop('min')) / ($(selector).prop('max') - $(selector).prop('min')));
            let bg = `linear-gradient(90deg,${sliderProps.fill}${perc}%,${sliderProps.background}${perc+
0.1}%)`;
            $(selector).css('background', bg);
            $(selector).siblings('.range-label').find('.value-wrapper').css('left', perc + '%');
            $(selector).siblings('.range-label').find('.range-value').text(val);
            let price = (($("input.price-value").val() * 1000) / $("input.length-value").val()).toFixed(0);
            let formatted = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $(".result-price .price").text(formatted);
        }
    };
    $("input.range").rangeGradient();
    $("input.range").on('input ready', function() { $("input.range").rangeGradient(); });
});