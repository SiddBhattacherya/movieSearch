# Movie Search

## Usage
Welcome to Movie Search! 
Search for your favourite movies and click on the results to view their posters.
You can also click on the "left" or "right" buttons to scroll through the movies you've searched for.

## Technical Design
Here is a brief description of how I designed this application (divided by the React Components I created)

### MovieSearch
This component contains the search bar as well as the MovieList Component. I used this component to hold the states to show the modal,
as well as to control which movie gets passed to the Modal Component. I also used a useEffect hook to make a call to the movie API
by taking the input from the user in the search bar and interpolating it with the API provided, using axios to make a GET request. Then I set 
a state in this component to hold the array of movies that was returned. This array is then passed to the MovieList component.

### MovieList
This component takes the array of movies from the MovieSearch component and uses the map function to create a list of Movie components. I also 


### Movie
This component takes in a movie and index. I display the movie's title, year and poster. I also set the modal to show and set the movie showed 
in the modal using the onClick function of the main div of this component.

### Modal
This Component takes in a function to set the current modal movie as well as the function to hide the modal after the user clicks the close button.
