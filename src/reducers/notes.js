import {GET_NOTES} from '../actions/index';
import _ from 'lodash';

export function getNotes(state = null, action) {
    // const notes = action.payload.data.doc;
    
    switch(action.type) {
        case GET_NOTES:
          if (action.payload.data) {
              console.log('undefined doc',action.payload.data);
              const docs = action.payload.data.doc;
              const newDocs = _.groupBy(docs, doc => doc.date);
              console.log('notes are fetched', docs);
              return newDocs;
          }
          return action.payload;
        default:
          return state;
    }
    
}