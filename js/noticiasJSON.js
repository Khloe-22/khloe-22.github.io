document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');

    fetch('./data/noticias.json')
        .then(response => response.json())
        .then(data => {
            const noticias = data.noticias;
            let newsHTML = '';

            noticias.forEach(noticia => {
                newsHTML += `
                    <article class="news__item">
                        <img src="${noticia.imagen}" alt="${noticia.titulo}" class="news__img">
                        <div class="news__content">
                            <h3 class="news__title">${noticia.titulo}</h3>
                            <p class="news__category">${noticia.categoria}</p>
                            <p class="news__text">${noticia.contenido}</p>
                            <a href="${noticia.url}" class="news__link" target="_blank">Leer más</a>
                        </div>
                    </article>
                `;
            });

            newsContainer.innerHTML = newsHTML;
        })
        .catch(error => {
            console.error('Error al cargar las noticias:', error);
        });
});
