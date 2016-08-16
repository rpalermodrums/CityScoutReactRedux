/**
 * Created by Sven on 8/15/16.
 */
export default function getPreferences(preferences) {
  return {
    type: 'GET_PREFERENCES',
    payload: preferences
  }
}
