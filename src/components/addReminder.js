import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class AddReminder extends Component {
    renderField(field) {
        const {meta: { touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input  type={field.input.name} className="form-control" {...field.input} />
                <p className="help-text text-danger">{touched ? error : ''}</p>
            </div>
        );
    }

    render() {
        return (
            <form>
                <Field 
                    label="Date"
                    name="date"
                    isDate={true}
                    component={this.renderField}
                />
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Note"
                    name="note"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/" >Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Please fill in title';
    }
    if (!values.date) {
        errors.date = 'Please select a date';
    }
    if(!values.note || values.note.length <= 5) {
        errors.note = 'Please fill out the note. Note shouldn\'t be less than 5 characters'
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewNoteForm'
})(AddReminder);