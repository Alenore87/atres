  $.ajax({
    url: folder,
    success: async function (data) {
      // Crée une liste non ordonnée HTML
      const ulList = $('<ul class="navigation">');

      // Obtenez l'URL de base pour construire les liens complets
      const baseUrl = new URL(folder, window.location.origin);

      // Parcourez chaque lien dans le contenu
      const anchors = $(data).find('a');
      const items = [];

      // Commencez à partir de la deuxième position (index 1)
      for (let i = 1; i < anchors.length; i++) {
        const anchor = anchors[i];
        const href = $(anchor).attr('href');
        const title = $(anchor).text();

        // Supprime l'extension ".txt" du titre
        let titleNoTXT = title.replace('.txt', '');

        // Ajoute ".0" à la fin du titre si c'est un nombre décimal
        if (/^\d+(\.\d+)?$/.test(titleNoTXT)) {
          titleNoTXT += ".0";
        }

        items.push({ title: titleNoTXT, href: href });
      }

      // Trier les éléments en fonction du titre
      items.sort((a, b) => parseFloat(a.title) - parseFloat(b.title));

      for (const item of items) {
        // Crée une nouvelle ligne dans la liste non ordonnée
        const liTitle = $('<li class="toggleSubMenu">');
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
          if (response.ok && response.headers.get('Content-Type').includes('text/plain')) {
            const contenu = await response.text();
            if (contenu) {
              // Crée un élément de liste pour le lien
            const liLink = $('<li>');
            const urlEp = new URL(item.href, baseUrl); // Crée l'URL complète
            const titleLink = $('<a target="_blank">')
              .attr('href', urlEp)
              .text('Lien');
            liLink.append(titleLink);

            try {
              const response = await fetch(urlEp);
              if (response.ok && response.headers.get('Content-Type').includes('text/plain')) {
                const contenu = await response.text();
                if (contenu) {
                  // Crée une sous-liste non ordonnée pour le lien
                  const ulLink = $('<ul class="subMenu">');

                  // Séparer le contenu en lignes
                  const lines = contenu.split('\n');

                  // Vérifie si le contenu de la ligne contient "youtube.com"
                  if (contenu.includes("youtube.com/embed/")) {
                    // Si oui, crée un élément de liste avec l'iframe
                    lines.forEach((line, index) => {
                      if (line.trim() !== '') { // Vérifie si la ligne n'est pas vide
                        const lineLink = $('<iframe class="preview" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>')
                          .attr('src', line);
                        const lineLi = $('<li>').append(lineLink);
                        ulLink.append(lineLi);
                      }
                    });
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
                }
              }
            } catch (error) {
              console.error('Erreur: ' + item.title, error);
            }

            // Ajoute l'élément de titre à la liste non ordonnée de liens
            ulList.append(liTitle);
            }
          }
        } catch (error) {
          console.error('Erreur: ' + item.title, error);
        }

        // Ajoute l'élément de titre à la liste non ordonnée de liens
        ulList.append(liTitle);

      }

      // Ajoute la liste non ordonnée à un élément avec l'ID "animelinks"
      $('#animelinks').append(ulList);

      // Submenu working
      $(document).ready( function () {
      $(".navigation ul.subMenu:not('.open_at_load')").hide();
      $(".navigation li.toggleSubMenu span").each( function () {
          var TexteSpan = $(this).text();
          $(this).replaceWith('<a href="" title="Afficher le sous-menu">' + TexteSpan + '<\/a>') ;
      } ) ;
      $(".navigation li.toggleSubMenu > a").click( function () {
          if ($(this).next("ul.subMenu:visible").length != 0) {
              $(this).next("ul.subMenu").slideUp("normal", function () { $(this).parent().removeClass("open") } );
          }
          else {
              $(".navigation ul.subMenu").slideUp("normal", function () { $(this).parent().removeClass("open") });
              $(this).next("ul.subMenu").slideDown("normal", function () { $(this).parent().addClass("open") } );
          }
          return false;
        });
      });

    },
  });

// Attendre 1.5 secondes avant de cacher le loader
setTimeout(function() {
  $("#loading").fadeOut(450);
}, 1200);

setTimeout(function() {
  $("#animelinks").slideDown(900).removeClass("HideC");
}, 1999);
