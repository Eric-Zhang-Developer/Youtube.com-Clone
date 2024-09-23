const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

console.log('Script loaded successfully.');
console.log('Search bar element:', searchBar);
console.log('Search button element:', searchButton);

// Handles Search
function performSearch() {
  const query = searchBar.value.trim();
  console.log('Searching with', query);
  if (query) {
    const encodedQuery = encodeURIComponent(query);
    console.log('Encoded query:', encodedQuery);
    window.location.href = `https://www.youtube.com/results?search_query=${encodedQuery}`;
  } 
}

// Listens for search button click
searchButton.addEventListener('click', performSearch);
console.log('Search button event listener added.');