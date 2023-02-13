export function saveState(state) {
  try {
    const serializedState = JSON.stringify({
      persons: state.persons,
    });
    sessionStorage.setItem('state', serializedState);
  } catch (error) {
    console.log('Error saving state to session storage:', error);
  }
}
  
export function loadState() {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState).persons;
  } catch (error) {
    console.log('Error loading state from session storage:', error);
    return undefined;
  }
}