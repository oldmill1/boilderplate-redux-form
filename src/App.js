import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const showResults = (values) => {
    console.log(values)
}

const renderInput = field => {
    const { input, meta: { touched, error } } = field
    return (
        <div>
            <label>{field.placeholder}</label>
            <div>
                <input {...input} placeholder={field.placeholder} />
                {error && touched && <span>error</span>}
            </div>
        </div>
    )
}

let App = ({ handleSubmit, invalid, submitting, pristine }) => {
    return (
        <div className='App'>
            <h1>Demo Form</h1>
            <form onSubmit={handleSubmit(showResults)}>
                <div className="fields">
                    <Field
                        name="firstName"
                        component={renderInput}
                        placeholder="First Name"
                    />
                </div>
                <div className="button">
                    <button type="submit" disabled={invalid || submitting || pristine }>Submit</button>
                </div>
            </form>
        </div>
    )
}

App = reduxForm({
    form: 'testForm'
})(App)

export default App
