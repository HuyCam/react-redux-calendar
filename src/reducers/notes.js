import {GET_NOTES} from '../actions/index';

export function getNotes(state = null, action) {
    // const notes = action.payload.data.doc;
    
    switch(action.type) {
        case GET_NOTES:
          if (action.payload) {
              console.log('notes are fetched',action.payload.data.doc);
              return action.payload.data.doc;
          }
          return action.payload;
        default:
          return state;
    }
    
}