import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

import { Subscribe } from "unstated";
import ListContainer from "../state/ListContainer";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// const onSubmit = async values => {
//   await sleep(300);
//   window.alert(values.item);
// };

const FinalInput = () => (
  <Styles>
    <Subscribe to={[ListContainer]}>
      {lista => (
        <Form
          onSubmit={async values => lista.add(values.item)}
          validate={values => {
            const errors = {};
            if (!values.item) {
              errors.item = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="item">
                {({ input, meta }) => (
                  <div>
                    <label>To do:</label>
                    <textarea {...input} placeholder="Make an App">
                      {" "}
                    </textarea>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />
      )}
    </Subscribe>
  </Styles>
);
export default FinalInput;
