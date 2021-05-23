import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import FormGroup from "../../../components/Forms/formGroup";
import { GetCandidateAsync, UpdateCandidateAsync } from "../../../services/CandidateService";

import * as Yup from 'yup';
import {  } from "../../../api/CandidateAPI";
import FlashMessageService from "../../../util/FlashMessageService";


const EditCandidateScreen = () => {
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const candidateData = await GetCandidateAsync(id);
        candidateData.dateOfBirth = new Date(candidateData.dateOfBirth * 1000).toISOString().split('T')[0];
  
        setCandidate(candidateData);
      } catch {
        FlashMessageService.setError("An unexpected error has occurred. PLease try again later.");
      } finally {
        setLoading(false);
      }
      
    };

    fetch();
  }, [id]);

  const submitAsync = async (values, { setSubmitting }) => {
    FlashMessageService.reset();
    const newCandidate = Object.assign(candidate, values);

    setCandidate(newCandidate);

    try {
      await UpdateCandidateAsync(newCandidate);

      FlashMessageService.setSuccess("Successfully updated candidate");
    } catch {
      FlashMessageService.setError("An unexpected error has occurred. Please try again later.");
    }

  };

  if(loading) {
    return (
      <Container className="main-container">
        <div className="d-flex justify-content-center ">
          <Spinner animation="border" variant="primary" />
        </div>
      </Container>
      
    );
  }

  if(candidate == null) {
    return <></>;
  }

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

  return (
    <Container className="main-container">
      <Button onClick={() => history.push(`/candidates/${id}`)}>Back to candidate</Button>

      <Card className="mt-1">
        <Card.Body>
          <Formik
            initialValues={{
              firstName: candidate.firstName, surname: candidate.surname, address1: candidate.address1, 
              town: candidate.town, postCode: candidate.postCode, country: candidate.country,
              phoneHome: candidate.phoneHome, phoneMobile: candidate.phoneMobile, phoneWork: candidate.phoneWork, 
              dateOfBirth: candidate.dateOfBirth
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
                        : <React.Fragment>Save</React.Fragment>
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

export default EditCandidateScreen;