$(document).ready(function () {

    AOS.init({
        once: true, // whether animation should happen only once - while scrolling down
        // mirror: true, // whether elements should animate out while scrolling past them
    });

    if (window.innerWidth > 768) {
        var rellax = new Rellax('.rellax')
    }

    $(".calendar-toggler").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open')
        $('.calendar-content').toggleClass('open')
    })

    // $('.lang-menu li').click(function (e) {
    //     e.preventDefault();

    //     $('.lang-menu li').removeClass('current-lang')
    //     $(this).addClass('current-lang')
    // })


    // custom select
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);

    // parthners swiper
    var swiper = new Swiper(".parthners-slider", {
        slidesPerView: 6,
        spaceBetween: 90,
        loop: true,
        autoplay: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 90
            }
        }
    });
    // analog swiper
    var swiper = new Swiper(".bottom-content__analog", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

    // school swiper
    $(".school-slider").each(function (index, elem) {
        var swiper = new Swiper(this, {
            lazyLoading: true,
            loop: true,
            observeParents: true,
            navigation: {
                nextEl: '.swiper-button-prev' + index + '',
                prevEl: '.swiper-button-next' + index + '',
            }
        })
    })


    // blog
    var swiper = new Swiper(".blog-swiper-mobile", {
        lazyLoading: true,
        loop: true,
        spaceBetween: 5,
        // slidesPerView: 1,
        freeMode: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-prev-blog',
            prevEl: '.swiper-button-next-blog',
        }
    })

    // excursions
    var swiper = new Swiper(".excursion-swiper", {
        lazyLoading: true,
        loop: true,
        spaceBetween: 5,
        // slidesPerView: 1,
        freeMode: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-prev-blog',
            prevEl: '.swiper-button-next-blog',
        }
    })


    // calendar swiper
    $(".calendar-swiper").each(function (index, elem) {
        var swiper2 = new Swiper(this, {
            loop: false,
            observeParents: true,
            slidesPerView: 5,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-prev-calendar' + (index + 1) + '',
                prevEl: '.swiper-button-next-calendar' + (index + 1) + '',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1350: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1440: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            }
        })
    })


    $(".open-form").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
    })


    //tabs school
    $('.school-link').click(function (e) {
        e.preventDefault()
        var ind;
        $('.school-link').removeClass('active')
        $(this).addClass('active')

        $('.school-link').each(function (i, elem) {
            if ($(elem).hasClass('active')) {
                ind = i
            }
        })

        $(".tab-content").removeClass('active');

        $(".tab-content").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('active')
            }
        })
    })


    // animate events
    $(window).scroll(function () {
        if (window.innerWidth > 991) {

            $('.events-body-desk .event-item').each(function () {
                var $elementPos = $(this).offset().top;
                var $scrollPos = $(window).scrollTop();

                var $sectionH = $(this).height();
                var $h = $(window).height();
                var $sectionVert = (($h / 6) - ($sectionH / 4));


                if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
                    $(this).addClass('animate');
                } else {
                    $(this).removeClass('animate');
                }
            });
        }
    });

    if (window.innerWidth < 991) {
        var swiper = new Swiper(".events-body-mobile", {
            slidesPerView: 2,
            spaceBetween: 5,
            freeMode: true,
            observeParents: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 5
                }
            }
        })
    }


    setTimeout(function () {
        $("[data-title='right-fade']").addClass('animate-title')
    }, 500);
    setTimeout(function () {
        $("[data-title='right-fade-line']").addClass('animate-line')
    }, 200);




    // types activites 
    $("[name='type-activites']").on('input', function () {

        let currId;

        if ($(this).prop('checked')) {
            currId = $(this).attr('id')

            $('.type-img').each(function (i, elem) {
                if ($(elem).hasClass(currId)) {
                    $(this).addClass('show')
                }

            })
        } else {
            currId = $(this).attr('id')

            $('.type-img').each(function (i, elem) {
                if ($(elem).hasClass(currId)) {
                    $(this).removeClass('show')
                }

            })
        }


    })


    // faq
    $(".ask").click(function () {
        $(this).toggleClass('active')
    })


    //activites-calendar
    $(".activites-name").click(function () {
        $(this).toggleClass('active')
    })


    // info title change
    let titleDefault = $('.info-activites-title').text();

    $(".calendar-check .day").not('.empty-day').click(function (e) {
        e.preventDefault();
        $(".infos-content .day").removeClass('active')
        $(this).toggleClass('active')

        let titleDate = $('.info-activites-title').attr('data-title-info')
        let removeButton = $('.info-activites-title').attr('data-remove')
        let mounth = $(this).closest('.mounth').find('.mounth-title').text()

        $('.info-activites-title').text(titleDate + " ")
        $('<div class="date-wrap"></div>').appendTo($('.info-activites-title'))
        $('.date-wrap').text($(this).text() + " " + mounth + " " + "2022")
        $('<button class="remove-date">' + removeButton + '</button>').appendTo($('.info-activites-title'))
    })

    $(document).on('click', '.remove-date', function (e) {
        e.preventDefault();
        $(".infos-content .day").removeClass('active');
        $('.info-activites-title').text(titleDefault)
    })


    if (window.innerWidth < 768) {
        $('<button class="close-mobile-menu"></button>').appendTo($('.menu'))

        let currentBg = $(".activites-single .top-content .left-col").attr("class")
        let currentBgBlog = $(".blog-single .top-content .left-col").attr("class")

        $(".calendar-toggler").insertAfter($(".activites-single .top-content .right-col")).addClass(currentBg)
        $(".event-text-info").insertAfter($(".blog-single .top-content .right-col")).addClass(currentBgBlog)
    } else {
        $(".calendar-toggler").appendTo($(".activites-single .top-content .left-col"))
        $(".event-text-info").appendTo($(".blog-single .top-content .left-col"))
    }

    $(document).on('click', '.close-mobile-menu', function () {
        $(".menu").removeClass('active');
    })

    $(".mobile-menu-button").click(function () {
        $(".menu").toggleClass('active');
    })






    setTimeout(function () {
        $('.popup-info, .bg-layer').addClass('show')
    }, 5000)

    $('.popup-close').click(function () {
        $('.popup-info, .bg-layer').removeClass('show')
    })
})








