const filmsData = ( films ) => {
    return films && films.filter(item => (
        item.length !== {}
   )).map(item => (
       {
           title: item.title,
           openingCrawl: item.opening_crawl,
           episode: item.episode_id,
           director: item.director,
       }
   ))
}

export default filmsData;