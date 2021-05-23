import React from "react"; 

import * as Yup from 'yup';

import { Formik } from "formik";
import { Card, Col, Container, Form, Button, Spinner } from "react-bootstrap";
import FormGroup from "../../../components/Forms/formGroup";
import { CreateCandidateAsync } from "../../../services/CandidateService";
import { useHistory } from "react-router";
import FlashMessageService from "../../../util/FlashMessageService";

const CreateCandidateScreen = () => {
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    surname: Yup.string().required("Surname is required"),
    address1: Yup.string().required("Address is required"),
    town: Yup.string().required("Town is required"),
    postCode: Yup.string().required("Post Code is required"),
    country: Yup.string().required("Country is required"),
    phoneHome: Yup.string().required("Home Phone is required"),
    phoneMobile: Yup.string().required("Mobile Phone is required"),
    phoneWork: Yup.string().required("Work Phone is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
  });

  const submitAsync = async (values, { setSubmitting }) => {
    try {
      await CreateCandidateAsync(values);

      history.push("/candidates");
    } catch {
      FlashMessageService.setError("An unexpected error has occurred. Please try again later.");
    }

  };

  return (
    <Container className="main-container">
      <Card>
        <Card.Body>
          <Formik
            initialValues={{
              firstName: "", surname: "", address1: "", town: "", postCode: "", country: "",
              phoneHome: "", phoneMobile: "", phoneWork: "", dateOfBirth: ""
            }}
            validationSchema={validationSchema}
            onSubmit={submitAsync}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit} noValidate>
                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="text" name="firstName" label="First Name" formikProps={props} />
                  </Col>

                  <Col md={6}>
                    <FormGroup type="text" name="surname" label="Surname" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="date" name="dateOfBirth" label="Date Of Birth" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="text" name="address1" label="Address" formikProps={props} />
                  </Col>

                  <Col md={6}>
                    <FormGroup type="text" name="town" label="Town" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="text" name="postCode" label="Post Code" formikProps={props} />
                  </Col>

                  <Col md={6}>
                    <FormGroup type="text" name="country" label="Country" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="text" name="phoneHome" label="Home Phone" formikProps={props} />
                  </Col>

                  <Col md={6}>
                    <FormGroup type="text" name="phoneMobile" label="Mobile Phone" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col md={6}>
                    <FormGroup type="text" name="phoneWork" label="Work Phone" formikProps={props} />
                  </Col>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                  <Col md={3}>
                    <Button variant="primary" type="submit" disabled={props.isSubmitting} className="btn-block mt-4">
                      {props.isSubmitting
                        ? <React.Fragment><Spinner animation="border" size="sm" /> Loading...</React.Fragment>
                        : <React.Fragment>Add</React.Fragment>
                      }
                    </Button>
                  </Col>
                </Form.Row>

              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  )
};

export default CreateCandidateScreen;