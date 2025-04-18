// Function to add a search to local storage
const addRentalSearchToHistory = (searchCriteria) => {
    try {
      const existingHistory = localStorage.getItem('rentalSearchHistory');
      let history = existingHistory ? JSON.parse(existingHistory) : [];
  
      // Basic check to avoid duplicates (you might want more sophisticated logic)
      if (!history.some(item => JSON.stringify(item) === JSON.stringify(searchCriteria))) {
        history = [searchCriteria, ...history].slice(0, 5); // Add to the beginning, keep last 5
        localStorage.setItem('rentalSearchHistory', JSON.stringify(history));
      }
    } catch (error) {
      console.error('Error saving rental search history:', error);
    }
  };
  
  // Function to retrieve rental search history from local storage
  const getRentalSearchHistory = () => {
    try {
      const history = localStorage.getItem('rentalSearchHistory');
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error retrieving rental search history:', error);
      return [];
    }
  };
  
  // Function to clear rental search history from local storage
  const clearRentalSearchHistory = () => {
    try {
      localStorage.removeItem('rentalSearchHistory');
    } catch (error) {
      console.error('Error clearing rental search history:', error);
    }
  };
  
  export { addRentalSearchToHistory, getRentalSearchHistory, clearRentalSearchHistory };