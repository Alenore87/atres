    // <!--[ Displaying Chapter ]-->

        const folderSL = `${link}${wTitle}`; 
        $.ajax({
          url: folderSL,
          success: function(data) {
            $(data).find("a").attr("href", function(i, val) {
              {
                const NumberChapt = val.replace(/[^a-z0-9.]/gi, '');
                const NumberChaptWithoutNLine = NumberChapt.split("\n");
  
                var Dispay_ON = {
                  display: "block",
                };   
    
                var DisplayBTN_ON = {
                  display: "initial",
                };   
      
                document.querySelector('.LoadChapt').removeAttribute("id", "loaderSC");

                // Display Liste Chapitres Lecteur
                const chap_All = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 0) {if (value <= 100000) {return true;}}}return false;});
                $(".chapitreLL").append( "<option id='ChptNbr' value="+ chap_All +">CHAPITRE "+ chap_All+"</option>" );
      
                // 0
                var chap_0_99 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 0) {if (value <= 100) {return true;}}}return false;});
                $(".chapitre0").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_0_99 +"><div class='icon DagShre DagPlayOpt'>"+ chap_0_99+"</div></li>" ).css(Dispay_ON);
                $('#Button0').css(DisplayBTN_ON);
      
                // 100
                var chap_100_199 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 100) {if (value <= 200) {return true;}}}return false;});
                $(".chapitre100").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_100_199 +"><div class='icon DagShre DagPlayOpt'>"+ chap_100_199+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("101")) {$('#Button100').css(DisplayBTN_ON);}
                
                // 200
                var chap_200_299 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 200) {if (value <= 300) {return true;}}}return false;});
                $(".chapitre200").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_200_299 +"><div class='icon DagShre DagPlayOpt'>"+ chap_200_299+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("201")) {$('#Button200').css(DisplayBTN_ON);}
      
                // 300
                var chap_300_399 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 300) {if (value <= 400) {return true;}}}return false;});
                $(".chapitre300").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_300_399 +"><div class='icon DagShre DagPlayOpt'>"+ chap_300_399+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("301")) {$('#Button300').css(DisplayBTN_ON);}
      
                // 400
                var chap_400_499 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 400) {if (value <= 500) {return true;}}}return false;});
                $(".chapitre400").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_400_499 +"><div class='icon DagShre DagPlayOpt'>"+ chap_400_499+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("401")) {$('#Button400').css(DisplayBTN_ON);}
      
                // 500
                var chap_500_599 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 500) {if (value <= 600) {return true;}}}return false;});
                $(".chapitre500").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_500_599 +"><div class='icon DagShre DagPlayOpt'>"+ chap_500_599+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("501")) {$('#Button500').css(DisplayBTN_ON);}
      
                // 600
                var chap_600_699 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 600) {if (value <= 700) {return true;}}}return false;});
                $(".chapitre600").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_600_699 +"><div class='icon DagShre DagPlayOpt'>"+ chap_600_699+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("601")) {$('#Button600').css(DisplayBTN_ON);}
      
                // 700
                var chap_700_799 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 700) {if (value <= 800) {return true;}}}return false;});
                $(".chapitre700").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_700_799 +"><div class='icon DagShre DagPlayOpt'>"+ chap_700_799+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("701")) {$('#Button700').css(DisplayBTN_ON);}
      
                // 800
                var chap_800_899 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 800) {if (value <= 900) {return true;}}}return false;});
                $(".chapitre800").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_800_899 +"><div class='icon DagShre DagPlayOpt'>"+ chap_800_899+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("801")) {$('#Button800').css(DisplayBTN_ON);}
      
                // 900
                var chap_900_999 = NumberChaptWithoutNLine.filter(function(value) {if (!isNaN(value)) {if (value >= 900) {if (value <= 1000) {return true;}}}return false;});
                $(".chapitre900").append( "<li id='ChptNbr' onclick='ShowChapter(this)' value="+ chap_900_999 +"><div class='icon DagShre DagPlayOpt'>"+ chap_900_999+"</div></li>" );
                if (NumberChaptWithoutNLine.includes("901")) {$('#Button900').css(DisplayBTN_ON);}

                $(document).ready(function() {
                  // Récupérer l'élément avec value = 179.5
                  var HideChaptSLSS0 = $('[value="179.5"]');

                  // Cacher l'élément s'il existe
                  if (HideChaptSLSS0.length > 0) {
                    HideChaptSLSS0.hide();
                  }
                });
    
                sessionStorage.setItem('LastChapter', NumberChaptWithoutNLine);
    
                $('#Button0').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre0").css(Dispay_ON);
                });
      
                $('#Button100').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre100").css(Dispay_ON);
                });
      
                $('#Button200').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre200").css(Dispay_ON);
                });
      
                $('#Button300').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre300").css(Dispay_ON);
                });
      
                $('#Button400').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre400").css(Dispay_ON);
                });
      
                $('#Button500').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre500").css(Dispay_ON);
                });
      
                $('#Button600').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre600").css(Dispay_ON);
                });
      
                $('#Button700').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre700").css(Dispay_ON);
                });
      
                $('#Button800').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre800").css(Dispay_ON);
                });
      
                $('#Button900').click(function() {
                  $(".chptdspl").css("display", "");
                  $(".chapitre900").css(Dispay_ON);
                });
              } 
            });
      }
      });

      function ShowChapter(el) {
        document.querySelectorAll(".chapt img")
        .forEach(img => img.remove());
        document.querySelector('.chapt').id = 'loaderSC';
      
        let chaptnbre = el.getAttribute('value');
        const folder2 = `${link}${title}/${chaptnbre}`;
          
          $.ajax({
              url : folder2,
              success: function (data) {
                $(data).find("a").attr("href", function (i2, val2) {
                  if( val2.match(/\.(jpg)$/) ) 
                  { 
                    var ChptrNow = sessionStorage.getItem('chapter');
                    document.getElementById('ChaptNber').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber2').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber3').innerHTML = "CHAPITRE " + ChptrNow;
      
                    document.querySelector('.chapt').removeAttribute("id", "loaderSC");
                    const linksimgview = `${folder2}/${val2}`;
                    $(".chapt").append(`<img id='ChaptIMG' src='${linksimgview}' loading='lazy' />`);
                    sessionStorage.setItem('chapter', chaptnbre);
    
                    if (ChptrNow === "0") {
                      $("#PreviousChapter").css("visibility", "hidden");
                      $("#PreviousChapter2").css("visibility", "hidden");
                    } else {
                      $("#PreviousChapter").css("visibility", "visible");
                      $("#PreviousChapter2").css("visibility", "visible");
                    }
    
                    var ChapterLast = sessionStorage.getItem("LastChapter");
                    if (ChptrNow === ChapterLast) {
                      $("#NextChapter").css("visibility", "hidden");
                      $("#NextChapter2").css("visibility", "hidden");
                    } else {
                      $("#NextChapter").css("visibility", "visible");
                      $("#NextChapter2").css("visibility", "visible");
                    }
    
                  } 
                }
                );
          }
          });
      }
      
      function ShowChapterLL(ChaptLL) {
        sessionStorage.removeItem("chapter"); // Supprime la clé "chapter" de la session
        sessionStorage.setItem('chapter', ChaptLL); // Stocke la nouvelle valeur dans la session
        
        document.querySelectorAll(".chapt img")
        .forEach(img => img.remove());
        document.querySelector('.chapt').id = 'loaderSC';
      
        let chaptnbre = ChaptLL;
        const folder2 = `${link}${title}/${chaptnbre}`;
          
          $.ajax({
              url : folder2,
              success: function (data) {
                $(data).find("a").attr("href", function (i2, val2) {
                  if( val2.match(/\.(jpg)$/) ) 
                  { 
                    var ChptrNow = sessionStorage.getItem('chapter');
                    document.getElementById('ChaptNber').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber2').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber3').innerHTML = "CHAPITRE " + ChptrNow;
      
                    document.querySelector('.chapt').removeAttribute("id", "loaderSC");
                    const linksimgview = `${folder2}/${val2}`;
                    $(".chapt").append(`<img id='ChaptIMG' src='${linksimgview}' loading='lazy' />`);
                    sessionStorage.setItem('chapter', chaptnbre);
    
                    if (ChptrNow === "0") {
                      $("#PreviousChapter").css("visibility", "hidden");
                      $("#PreviousChapter2").css("visibility", "hidden");
                    } else {
                      $("#PreviousChapter").css("visibility", "visible");
                      $("#PreviousChapter2").css("visibility", "visible");
                    }
    
                    var ChapterLast = sessionStorage.getItem("LastChapter");
                    if (ChptrNow === ChapterLast) {
                      $("#NextChapter").css("visibility", "hidden");
                      $("#NextChapter2").css("visibility", "hidden");
                    } else {
                      $("#NextChapter").css("visibility", "visible");
                      $("#NextChapter2").css("visibility", "visible");
                    }
    
                  } 
                }
                );
              }
          });
      }

      function chptDg() { 
        $(".chapitreLL").prop("selectedIndex", 0).val(); 
      }

      var isShowNextChapterRunning = false;
      function ShowNextChapter() {

      // Vérifiez si la fonction est en cours d'exécution
      if (!isShowNextChapterRunning) {
          isShowNextChapterRunning = true;

        document.querySelectorAll(".chapt img")
        .forEach(img => img.remove());
        document.querySelector('.chapt').id = 'loaderSC';
      
        var ChapterNow = sessionStorage.getItem("chapter"); // Récupère la valeur stockée dans la session
        sessionStorage.removeItem("chapter"); // Supprime la clé "chapter" de la session

        // Vérifie si la valeur de "ChapterNow" est égale à "179"
        if (ChapterNow === "179" || ChapterNow === "179.5") {
          ChapterNow = parseFloat(ChapterNow) + 0.5; // Convertit en nombre et ajoute 0.5
        } else {
          ChapterNow = parseFloat(ChapterNow) + 1; // Convertit en nombre et ajoute 1 pour les autres valeurs
        }
        sessionStorage.setItem('chapter', ChapterNow); // Stocke la nouvelle valeur dans la session
    
        var ChapterNew = sessionStorage.getItem("chapter");
        const folder2 = `${link}${title}/${ChapterNew}`;
          
          $.ajax({
              url : folder2,
              success: function (data) {
                $(data).find("a").attr("href", function (i2, val2) {
                  if( val2.match(/\.(jpg)$/) ) 
                  { 
                    var ChptrNow = sessionStorage.getItem('chapter');
                    document.getElementById('ChaptNber').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber2').innerHTML = "CHAPITRE " + ChptrNow;
                    document.getElementById('ChaptNber3').innerHTML = "CHAPITRE " + ChptrNow;

                    // Ajouter un délai d'attente
                    setTimeout(() => {
                      document.querySelector('.chapt').removeAttribute("id", "loaderSC");
                      const linksimgview = `${folder2}/${val2}`;
                      $(".chapt").append(`<img id='ChaptIMG' src='${linksimgview}' loading='lazy' />`);
    
                      if (ChptrNow === "0") {
                        $("#PreviousChapter").css("visibility", "hidden");
                        $("#PreviousChapter2").css("visibility", "hidden");
                      } else {
                        $("#PreviousChapter").css("visibility", "visible");
                        $("#PreviousChapter2").css("visibility", "visible");
                      }
      
                      var ChapterLast = sessionStorage.getItem("LastChapter");
                      if (ChptrNow === ChapterLast) {
                        $("#NextChapter").css("visibility", "hidden");
                        $("#NextChapter2").css("visibility", "hidden");
                      } else {
                        $("#NextChapter").css("visibility", "visible");
                        $("#NextChapter2").css("visibility", "visible");
                      }
                    }, 777); // Attente de 0.777s
                  } 
                  });
            }
            });
              // Configurez un délai pour réinitialiser l'état après un certain temps
            setTimeout(function() {
              isShowNextChapterRunning = false;
            }, 1777); // 1777 millisecondes (1.777 secondes)
          } 
        }
      
        var isShowPreviousChapterRunning = false;
        function ShowPreviousChapter() {

          // Vérifiez si la fonction est en cours d'exécution
          if (!isShowPreviousChapterRunning) {
            isShowPreviousChapterRunning = true;

          document.querySelectorAll(".chapt img")
          .forEach(img => img.remove());
          document.querySelector('.chapt').id = 'loaderSC';
        
          var ChapterNow = sessionStorage.getItem("chapter");
          sessionStorage.removeItem("chapter");
          // Vérifie si la valeur de "ChapterNow" est égale à "179"
          if (ChapterNow === "179.5" || ChapterNow === "180") {
            ChapterNow = parseFloat(ChapterNow) - 0.5; // Convertit en nombre et ajoute 0.5
          } else {
            ChapterNow = parseFloat(ChapterNow) - 1; // Convertit en nombre et ajoute 1 pour les autres valeurs
          }
          sessionStorage.setItem('chapter', ChapterNow); // Stocke la nouvelle valeur dans la session
          
          var ChapterNew = sessionStorage.getItem("chapter");
          const folder2 = `${link}${title}/${ChapterNew}`;
            
            $.ajax({
                url : folder2,
                success: function (data) {
                  $(data).find("a").attr("href", function (i2, val2) {
                    if( val2.match(/\.(jpg)$/) ) 
                    { 
                      var ChptrNow = sessionStorage.getItem('chapter');
                      document.getElementById('ChaptNber').innerHTML = "CHAPITRE " + ChptrNow;
                      document.getElementById('ChaptNber2').innerHTML = "CHAPITRE " + ChptrNow;
                      document.getElementById('ChaptNber3').innerHTML = "CHAPITRE " + ChptrNow;

                      // Ajouter un délai d'attente
                      setTimeout(() => {
                        document.querySelector('.chapt').removeAttribute("id", "loaderSC");
                        const linksimgview = `${folder2}/${val2}`;
                        $(".chapt").append(`<img id='ChaptIMG' src='${linksimgview}' loading='lazy' />`);
                          
                        if (ChptrNow === "0") {
                          $("#PreviousChapter").css("visibility", "hidden");
                          $("#PreviousChapter2").css("visibility", "hidden");
                        } else {
                          $("#PreviousChapter").css("visibility", "visible");
                          $("#PreviousChapter2").css("visibility", "visible");
                        }
        
                        var ChapterLast = sessionStorage.getItem("LastChapter");
                        if (ChptrNow === ChapterLast) {
                          $("#NextChapter").css("visibility", "hidden");
                          $("#NextChapter2").css("visibility", "hidden");
                        } else {
                          $("#NextChapter").css("visibility", "visible");
                          $("#NextChapter2").css("visibility", "visible");
                        }
                      }, 777); // Attente de 0.777s
                    } 
                  });
            }
            });
              // Configurez un délai pour réinitialiser l'état après un certain temps
            setTimeout(function() {
              isShowPreviousChapterRunning = false;
            }, 1777); // 1777 millisecondes (1.777 secondes)
          } 
        }

      function BtnChptHideAll () {
        $(".BtnChptNav button").removeClass("is-active");
      } 
      
      function BtnChptShow(button){
        $(button).addClass("is-active")
      }

      function toggleFullScreen() {
        if (!document.fullscreenElement &&    // alternative standard method
          !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
        }
      }

      // Back to the top - Scroll to a certain element
      function GoToTop(button){
        document.querySelector('#CloseChpt').scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
        
      // Fonction ready de jQuery
      $(document).ready(function() {
          // Attachez un gestionnaire d'événements au clic sur l'élément avec l'ID "ChptNbr"
          $(".chptdspl").click(function () {
              // Affichez la div
              $("#mdl-lecteur").show();
              // Cacher scroll page
              $('html, .mainMenu, .Blog pre, .Blog pre code, .Blog code').addClass('HideScroll'); 
          });
      });

      // ChapitreLL on page
      $(document).ready(function () {
        $("#BtnChLiM").on("click", function (event) {
            // Vérifier si l'élément cliqué est en dehors du select
            if (!$(event.target).is("#SelectOnPage")) {
                // Vérifiez si l'élément #SelectOnPage est visible
                if ($("#SelectOnPage").is(':visible')) {
                    // Si visible, alors masquez-le
                    $("#SelectOnPage").fadeOut("fast");
                } else {
                    // Sinon, affichez-le
                    $("#SelectOnPage").fadeIn("fast");
                }
              }
        });
    });

    function CloseChapter () {
        // Cacher le modèle (#mdl-lecteur)
        $("#mdl-lecteur").hide();
        // Afficher scroll page
        $('html, .mainMenu, .Blog pre, .Blog pre code, .Blog code').removeClass('HideScroll');
      } 

      // Défiler chapitre + ne pas le faire si appuie sur les boutons ChapitreLL & BackToTop
      $(document).ready(function() {
        var isAnimating = false;
        var scrollAmountMobile = 440;
        var scrollAmountDesktop = 550;

        $('.tabs.servers, #BtnChLiM, #BtnTop').click(function(event) {
        if (!$(event.target).closest('#BtnChLiM, #BtnTop').length) {
            if (!isAnimating) {
                isAnimating = true;

                var scrollAmount = $(window).width() < 768 ? scrollAmountMobile : scrollAmountDesktop;

                $('#mdl-lecteur').animate({
                    scrollTop: '+=' + scrollAmount + 'px'
                }, 470, function() {
                    isAnimating = false;
                });
            }
        }
    });
      $(window).scroll(function() {
          // Si l'utilisateur fait défiler manuellement, annulez l'animation en cours
          $('#mdl-lecteur').stop();
          isAnimating = false;
        });
      }
      );
