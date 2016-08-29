export default function getPreferences(preferences) {
  return {
    type: 'GET_PREFERENCES',
    payload: preferences
  }
}
