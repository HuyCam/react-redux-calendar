import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import NoteComponent from './note-component';

class Notes extends Component {
    renderNotes() {
        const notes = this.props.reminder.map(note => {
            return (
                <NoteComponent key={note.title} note={note} />
            );
        });
        if (notes.length === 0) {
            return 'Nothing to show yet...';
        }
        return notes;
    }

    render() {
        console.log('notes reminder',this.props.reminder);
        
        return(
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminder: _.filter(state.notes, (note) => {
            if (note.date === state.selectedDate) {
                return note;
            } 
        }),
        selectedDate: state.selectedDate
    }
}
export default connect(mapStateToProps)(Notes);