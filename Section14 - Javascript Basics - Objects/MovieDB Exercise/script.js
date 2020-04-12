// Create an array of Movie Objects
var movieArray = [{
        title: "In Bruges",
        rating: " 5 stars",
        hasWatched: "You have not seen "
    },
    {
        title: "Frozen",
        rating: " 4.5 stars",
        hasWatched: "You have seen "
    },
    {
        title: "Mad Max Fury Road",
        rating: " 5 stars",
        hasWatched: "You have seen "
    },
    {
        title: "Les Miserables",
        rating: " 3.5 stars",
        hasWatched: "You have not seen "
    }
];

//Iterate through array
movieArray.forEach(function(element) {
    console.log(element.hasWatched + '"' + element.title + '"' +" -" + element.rating)
});