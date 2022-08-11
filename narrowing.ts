interface Movie {
    title: string;
    duration: number
}

interface TVShow {
    title: string;
    numEpisodes: number;
    epDuration: number;
}


// TypeScript has a feature that can detect what to return based on the interface created above
function getRuntime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        // in this if block it knows that only TVShow has numEpisodes as part of its interface
        return media.numEpisodes * media.epDuration;
    }
    return media.duration;
}

console.log(getRuntime({ title: "Avengers", duration: 150 }))
console.log(getRuntime({ title: "Avengers", numEpisodes: 50, epDuration: 8 }))