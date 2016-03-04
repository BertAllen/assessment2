app.controller('FilmController', function($scope){
    // addFilms();
    // removeDups();
    // sortByYear();

/**
 * In this scenario you will be working with a single data set.
 * The Data set is an array of objects.
 * Each object is a film that has a name and year of release. 
 * 
 * Many of the questions will require you to finish the functions that are prewritten,
 * Add arguments when needed
 * You will not need to invoke any of the functions yourself
 * The Unit Tests should let you know when you got the function right
 * 
 * For Question 7 you will need to move everything over to VSCode and build your angular app there.
 * When you complete the app push it to your github and slack me with the url.
 * 
*/

//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
$scope.filmCount = function() {
    return $scope.films.length;
}


//Question 2 - Find film by Title 
$scope.findTitle = function(title) {
    for (var i = 0; i < $scope.films.length; i++) {
        if ($scope.films[i].name === title) {
            return $scope.films[i];
        }
    }
    var error = { title: "Movie title not found.", year: NaN }
    return error;
}

//Question 3 - Add each of the movies in the newFilms array to the films array
$scope.newFilms = [{
    name: 'Tangled',
    year: 2010
}, {
        name: 'Aladdin',
        year: 1992
    }, {
        name: 'Zootopia',
        year: 2016
    }, {
        name: 'The Little Mermaid',
        year: 1989
    }, {
        name: 'Beauty and the Beast',
        year: 1991
    }]

$scope.addFilms = function() { //this is not passing the unit test, and I don't know why .....
    for (var i = 0; i < $scope.newFilms.length; i++) {
        $scope.films.push($scope.newFilms[i]);
    }
}
//Question 4 - Remove any duplicate titles found in the films array by name
$scope.removeDups = function() { //this is not passing the unit test, and I don't know why .....
    for (var a = 0; a < $scope.films.length - 1; a++) {
        var compare = $scope.films[a];
        for (var b = a + 1; b < $scope.films.length; b++) {
            var flag = 1;
            do {
                var lookAt = $scope.films[b];
                if (lookAt.name === compare.name) {
                    $scope.films.splice(b, 1);
                    if (b >= $scope.films.length) {
                        flag = 0;
                    }
                } else {
                    flag = 0;
                }
            } while (flag);
        }
    }

}


//Question 5 - Find All films within a starting year and ending year
$scope.findReleasesWithin = function(start, end) {
    var yearBlock = [];
    for (var i = 0; i < $scope.films.length; i++) {
        if ($scope.films[i].year >= start && $scope.films[i].year <= end) {
            yearBlock.push($scope.films[i])
        }
    }
    return yearBlock;
}

//BONUS QUESTION - Arrange the films array from oldest to newest 
$scope.sortByYear = function() {
    do {
        var flag = 0;
        for (var i = 0; i < $scope.films.length - 1; i++) {
            if ($scope.films[i].year > $scope.films[i + 1].year) {
                var temp = $scope.films[i];
                $scope.films[i] = $scope.films[i + 1];
                $scope.films[i + 1] = temp;
                flag = 1;
            }
        }
    } while (flag);
    return $scope.films;
}

//Question 7 - Using the films array build an angular app
//that will let you manage adding and removing films with a view

$scope.films=[{
  name: 'Cinderella',
  year: 1950
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}, {
  name: 'Fantasia',
  year: 1940
}, {
  name: 'The Jungle Book',
  year: 1967
}, {
  name: 'Sleeping Beauty',
  year: 1959
}, {
  name: 'Pinocchio',
  year: 1940
}, {
  name: 'One Hundred and One Dalmations',
  year: 1961
}, {
  name: 'Bambi',
  year: 1942
}, {
  name: 'Alice in Wonderland',
  year: 1951
}, {
  name: 'Peter Pan',
  year: 1953
}, {
  name: 'The Sword in the Stone',
  year: 1963
}, {
  name: 'Lady and the Tramp',
  year: 1955
}, {
  name: 'Song of the South',
  year: 1946
}, {
  name: 'Steamboat Willie',
  year: 1928
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}];


})