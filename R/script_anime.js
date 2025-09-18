// STREAM
    $.ajax({
        url: aFolder,
        success: async function (data) {
            // Crée une liste non ordonnée HTML
            const ulList = $('<ul class="navigationEp navSTRM">');

            // Obtenez l'URL de base pour construire les liens complets
            const baseUrl = new URL(aFolder, window.location.origin);

            // Parcourez chaque lien dans le contenu
            const anchors = $(data).find('a').filter(function() {
                return $(this).attr('href') && $(this).attr('href').endsWith('.stream');
            });
            const items = [];

            // Commencez à partir de la première position (index 0)
            for (let i = 0; i < anchors.length; i++) {
                const anchor = anchors[i];
                const href = $(anchor).attr('href');
                const title = $(anchor).text();

                // Supprime l'extension ".stream" du titre
                let titleNoSTRM = title.replace('.stream', '');

                // Ajoute ".0" à la fin du titre si c'est un nombre décimal
                if (/^\d+(\.\d+)?$/.test(titleNoSTRM)) {
                    titleNoSTRM += ".0";
                }

                items.push({ title: titleNoSTRM, href: href });
            }

            // Trier les éléments en fonction du titre
            items.sort((a, b) => parseFloat(a.title) - parseFloat(b.title));

            for (const item of items) {
                // Crée une nouvelle ligne dans la liste non ordonnée
                const liTitle = $('<li class="toggleSubMenuStream1">');
                const spanElement = $('<span>').text("Episode " + item.title);
                liTitle.append(spanElement);

                // Crée une sous-liste non ordonnée pour les liens
                const ulLink = $('<ul class="subMenuStream1">');

                const urlEp = new URL(item.href, baseUrl); // Crée l'URL complète

                try {
                    const response = await fetch(urlEp);
                    if (response.ok) {
                        const contenu = await response.text();

                        // Séparer le contenu en lignes
                        const lines = contenu.split('\n');

                        // Vérifie si le contenu de la ligne contient "youtube.com"
                        if (contenu.includes("youtube.com/embed/")) {
                            // Si oui, crée un élément de liste avec l'iframe
                            lines.forEach((line) => {
                                if (line.trim() !== '') { // Vérifie si la ligne n'est pas vide
                                    const lineLink = $('<iframe class="preview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>')
                                        .attr('src', line);
                                    const lineLi = $('<li>').append(lineLink);
                                    ulLink.append(lineLi);
                                }
                            });
                        } else if (contenu.includes("report")) {
                            // Si le contenu inclut "report", crée un iframe affichant "Reporte"
                            const reportIframe = $('<b><i><span>Reporté</span></b></i>');
                            const reportLi = $('<li>').append(reportIframe);
                            ulLink.append(reportLi);
                        } else {
                            // Sinon, crée des éléments de liste pour chaque ligne normalement
                            lines.forEach((line, index) => {
                                if (line.trim() !== '') { // Vérifie si la ligne n'est pas vide
                                    const liLink = $('<li class="toggleSubMenuStream2">');
                                    const spanLink = $('<span>').text('Lien ' + (index + 1));
                                    liLink.append(spanLink);

                                    // Crée une sous-liste pour les iframes
                                    const ulSubLink = $('<ul class="subMenuStream2">');
                                    const iframe = $('<iframe class="videoframe" data-src="' + line + '" src="" frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>');
                                    ulSubLink.append(iframe);
                                    liLink.append(ulSubLink);

                                    // Ajoute l'élément de lien à la sous-liste
                                    ulLink.append(liLink);
                                }
                            });
                        }

                        // Ajoute la sous-liste de liens à l'élément de titre
                        liTitle.append(ulLink);
                            } else {
                                console.error('Erreur de réponse.');
                            }
                        } catch (error) {
                            console.error('Erreur lors de la récupération de l\'URL:', item.title, error);
                        }

                        // Ajoute l'élément de titre à la liste non ordonnée de liens
                        ulList.append(liTitle);
                    }

                    // Ajoute la liste non ordonnée à un élément avec l'ID "animelinksSTRM"
                    $('#animelinksSTRM').append(ulList);

                    // Fonctionnement et affichage des sous-menus STREAM
                    $(document).ready( function () {
                        $(".navigationEp ul.subMenuStream1:not('.open_at_load')").hide();
                        $(".navigationEp li.toggleSubMenuStream1 span").each( function () {
                            var TexteSpan = $(this).text();
                            $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>') ;
                        } ) ;
                        $(".navigationEp li.toggleSubMenuStream1 > a").click( function () {
                            if ($(this).next("ul.subMenuStream1:visible").length != 0) {
                                $(this).next("ul.subMenuStream1").slideUp("normal", function () { $(this).parent().removeClass("open") } );
                            }
                            else {
                                $(".navigationEp ul.subMenuStream1").slideUp("normal", function () { $(this).parent().removeClass("open") });
                                $(this).next("ul.subMenuStream1").slideDown("normal", function () { $(this).parent().addClass("open") } );
                            }
                            return false;
                        });

                        $(".navigationEp ul.subMenuStream2:not('.open_at_load')").hide();
                        $(".navigationEp li.toggleSubMenuStream2 span").each( function () {
                            var TexteSpan = $(this).text();
                            $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>') ;
                        } ) ;
                        $(".navigationEp li.toggleSubMenuStream2 > a").click( function () {
                            if ($(this).next("ul.subMenuStream2:visible").length != 0) {
                                $(this).next("ul.subMenuStream2").slideUp("normal", function () { $(this).parent().removeClass("open") } );
                            }
                            else {
                                $(".navigationEp ul.subMenuStream2").slideUp("normal", function () { $(this).parent().removeClass("open") });
                                $(this).next("ul.subMenuStream2").slideDown("normal", function () { $(this).parent().addClass("open") } );
                            }
                            return false;
                        });

                        $('.toggleSubMenuStream1 a').on('click', function(event) {
                            event.preventDefault(); // Empêche le comportement par défaut du lien
                            const parentLi = $(this).parent(); // Récupère l'élément parent <li>
                            
                            // Vérifiez si l'élément cliqué est déjà ouvert
                            const isOpen = parentLi.hasClass('open');

                            // Fermer menu liens
                            $(".navigationEp li.toggleSubMenuStream1 > a").click( function () {
                                if ($(this).next("ul.subMenuStream2:visible").length != 0) {
                                    $(this).next("ul.subMenuStream2").slideUp("normal", function () { $(this).parent().removeClass("open") } );
                                }
                                else {
                                    $(".navigationEp ul.subMenuStream2").slideUp("normal", function () { $(this).parent().removeClass("open") });
                                    $(this).next("ul.subMenuStream2").slideDown("normal", function () { $(this).parent().addClass("open") } );
                                }
                                return false;
                            });

                            // Fermez tous les autres sous-menus
                            $('.toggleSubMenuStream2').not(parentLi).removeClass('open').find('iframe').attr('src', '');
                        });

                        // Gestionnaire pour les boutons de section
                        $('.sectionlinksbuttons button').on('click', function(event) {
                            // Fermez tous les sous-menus
                            $(".navigationEp ul.subMenuStream1, .navigationEp ul.subMenuStream2").slideUp("normal", function () {
                                $(this).parent().removeClass("open");

                                // Sélectionnez tous les iframes dans le parent
                                $(this).find('iframe').each(function() {
                                    var $iframe = $(this);
                                    var src = $iframe.attr('src');

                                    // Vérifiez si le src contient "youtube"
                                    if (src && src.includes("youtube")) {
                                        // Si c'est du youtube, on remet le src après un court délai
                                        setTimeout(function() {
                                            $iframe.attr('src', src);
                                        }, 100); // Délai de 100 ms, ajustez si nécessaire
                                    } else {
                                        // Si ce n'est pas du youtube, retirez le src
                                        $iframe.attr('src', '');
                                    }
                                });
                            });
                        });



                        $('.toggleSubMenuStream2 a').on('click', function(event) {
                            event.preventDefault(); // Empêche le comportement par défaut du lien
                            const parentLi = $(this).parent(); // Récupère l'élément parent <li>
                            
                            // Vérifiez si l'élément cliqué est déjà ouvert
                            const isOpen = parentLi.hasClass('open');

                            // Fermez tous les autres sous-menus
                            $('.toggleSubMenuStream2').not(parentLi).removeClass('open').find('iframe').attr('src', '');

                            // Basculer la classe 'open' pour l'élément cliqué
                            parentLi.toggleClass('open');

                            // Sélectionner l'iframe à l'intérieur de l'élément sous-menu correspondant
                            const iframe = parentLi.find('.subMenuStream2').find('iframe');

                            if (parentLi.hasClass('open')) {
                                // Si la classe 'open' est présente, définir le src de l'iframe
                                const dataSrc = iframe.attr('data-src');
                                iframe.attr('src', dataSrc);
                            } else {
                                // Si la classe 'open' est absente, vider le src de l'iframe
                                iframe.attr('src', '');
                            }
                        });
                    });
                },
            });


    // DL
    $.ajax({
    url: aFolder,
    success: async function (data) {
        // Crée une liste non ordonnée HTML
        const ulList = $('<ul class="navigationEp navDL">');

        // Obtenez l'URL de base pour construire les liens complets
        const baseUrl = new URL(aFolder, window.location.origin);

        // Parcourez chaque lien dans le contenu
        const anchors = $(data).find('a').filter(function() {
            return $(this).attr('href') && $(this).attr('href').endsWith('.dl');
        });
        const items = [];

        // Commencez à partir de la première position (index 0)
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            const href = $(anchor).attr('href');
            const title = $(anchor).text();

            // Supprime l'extension ".dl" du titre
            let titleNoDL = title.replace('.dl', '');

            // Ajoute ".0" à la fin du titre si c'est un nombre décimal
            if (/^\d+(\.\d+)?$/.test(titleNoDL)) {
                titleNoDL += ".0";
            }

            items.push({ title: titleNoDL, href: href });
        }

        // Trier les éléments en fonction du titre
        items.sort((a, b) => parseFloat(a.title) - parseFloat(b.title));

        for (const item of items) {
            // Crée une nouvelle ligne dans la liste non ordonnée
            const liTitle = $('<li class="togglesubMenuDL">');
            const spanElement = $('<span>').text("Episode " + item.title);
            liTitle.append(spanElement);

            // Crée un élément de liste pour le lien
            const liLink = $('<li>');
            const urlEp = new URL(item.href, baseUrl); // Crée l'URL complète
            const titleLink = $('<a target="_blank">')
                .attr('href', urlEp)
                .text('Lien');
            liLink.append(titleLink);

            try {
                const response = await fetch(urlEp);
                if (response.ok) {
                    const contentType = response.headers.get('Content-Type');
                    const contenu = await response.text();

                    // Vérifiez si le contenu est vide
                    if (contenu) {
                        // Crée une sous-liste non ordonnée pour le lien
                        const ulLink = $('<ul class="subMenuDL">');

                        // Séparer le contenu en lignes
                        const lines = contenu.split('\n');

                        // Vérifie si le contenu de la ligne contient "youtube.com"
                        if (contenu.includes("youtube.com/embed/")) {
                            // Si oui, crée un élément de liste avec l'iframe
                            lines.forEach((line) => {
                                if (line.trim() !== '') { // Vérifie si la ligne n'est pas vide
                                    const lineLink = $('<iframe class="preview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>')
                                        .attr('src', line);
                                    const lineLi = $('<li>').append(lineLink);
                                    ulLink.append(lineLi);
                                }
                            });
                        } else if (contenu.includes("report")) {
                            // Si le contenu inclut "report", crée un iframe affichant "Reporte"
                            const reportIframe = $('<iframe class="report-frame" frameborder="0" allowfullscreen>')
                                .attr('src', 'data:text/html;charset=utf-8,' + encodeURIComponent('<h1>Reporte</h1>'));
                            const reportLi = $('<li>').append(reportIframe);
                            ulLink.append(reportLi);
                        } else {
                            // Sinon, crée un élément de liste pour le lien normal
                            lines.forEach((line, index) => {
                                if (line.trim() !== '') { // Vérifie si la ligne n'est pas vide
                                    const lineLink = $('<a target="_blank">')
                                        .attr('href', line)
                                        .text('Lien ' + (index + 1)); // Utilise l'index pour nommer le lien
                                    const lineLi = $('<li>').append(lineLink);
                                    ulLink.append(lineLi);
                                }
                            });
                        }

                        // Ajoute la sous-liste de liens à l'élément de titre si des liens ont été ajoutés
                        if (ulLink.children().length > 0) {
                            liTitle.append(ulLink);
                        }
                    } else {
                        console.error('Erreur : lien vide');
                    }
                } else {
                    console.error('Erreur de réponse.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération de l\'URL:', item.title, error);
            }

            // Ajoute l'élément de titre à la liste non ordonnée de liens
            ulList.append(liTitle);
        }

        // Ajoute la liste non ordonnée à un élément avec l'ID "animelinksDL"
        $('#animelinksDL').append(ulList);

        // Fonctionnement et affichage des sous-menus DL
        $(document).ready( function () {
            $(".navigationEp ul.subMenuDL:not('.open_at_load')").hide();
            $(".navigationEp li.togglesubMenuDL span").each( function () {
                var TexteSpan = $(this).text();
                $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>') ;
            } ) ;
            $(".navigationEp li.togglesubMenuDL > a").click( function () {
                if ($(this).next("ul.subMenuDL:visible").length != 0) {
                    $(this).next("ul.subMenuDL").slideUp("normal", function () { $(this).parent().removeClass("open") } );
                }
                else {
                    $(".navigationEp ul.subMenuDL").slideUp("normal", function () { $(this).parent().removeClass("open") });
                    $(this).next("ul.subMenuDL").slideDown("normal", function () { $(this).parent().addClass("open") } );
                }
                return false;
                });
            });
        },
    });

    // Retrait loader liens
    $(document).ready(function() {
        var checkExist = setInterval(function() {
            if ($('.HideC').children().length > 0) {
                clearInterval(checkExist); // Arrête l'intervalle une fois que les éléments sont trouvés
                
                // Fade out pour loadingSTRM et slide down pour animelinksSTRM
                $("#loadingSTRM").fadeOut(600, function() {
                    $("#animelinksSTRM").slideDown(1111);
                });

                // Fade out pour loadingDL et slide down pour animelinksDL
                $("#loadingDL").fadeOut(600, function() {
                    $("#animelinksDL").slideDown(1111);
                });
            }
        }, 500); // Vérifie toutes les 500 ms
    });

    // Buttons apparaitre stream & dl
    function showSection(section) {
        // Masquer toutes les sections
        const streamingSection = document.getElementById('streamingSection');
        const downloadSection = document.getElementById('downloadSection');

        streamingSection.classList.remove('show');
        downloadSection.classList.remove('show');

        // Afficher la section sélectionnée
        if (section === 'streaming') {
            streamingSection.classList.add('show');
        } else if (section === 'download') {
            downloadSection.classList.add('show');
        }

        // Utiliser setTimeout pour permettre la transition d'opacité
        streamingSection.style.display = section === 'streaming' ? 'block' : 'none';
        downloadSection.style.display = section === 'download' ? 'block' : 'none';
    }
