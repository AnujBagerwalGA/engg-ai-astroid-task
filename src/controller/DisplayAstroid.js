import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  searchTextAction,
  submitBtnAction,
  randomBtnAction,
  getAstroidDetialsAction,
  getAstroidListAction,
  resetBtnAction,
} from '../store/actionCreater';
import { Container, Card, Button } from 'react-bootstrap';
import {} from 'lodash';

const DisplayAstroid = (props) => {
  useEffect(() => {
    props.getAstroidDetialsAction(`${props.match.params.id}`);
  }, []);

  return (
    <div>
      <Container>
        <Card className="display-astroid">
          <Card.Body>
            <Card.Title>{props.selectedAstroidDetails.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props.selectedAstroidDetails.name}
            </Card.Subtitle>
            <Card.Text>{props.selectedAstroidDetails.nasa_jpl_url}</Card.Text>
            <Card.Text>
              {props.selectedAstroidDetails
                .is_potentially_hazardous_asteroid ? (
                <div>Hazardous</div>
              ) : (
                <div>Not Hazardous</div>
              )}
            </Card.Text>
            <Card.Link href={props.selectedAstroidDetails.nasa_jpl_url}>
              Go To More Detial
            </Card.Link>
          </Card.Body>
          <Button
            variant="primary"
            style={{ width: '400px' }}
            onClick={() => {
              props.resetBtnAction();
              props.history.push('/');
            }}
          >
            Back
          </Button>
        </Card>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    searchText: state.searchText,
    astroidList: state.astroidList,
    selectedAstroidDetails: state.selectedAstroidDetails,
  };
};

const mapDispatchToProps = {
  searchTextAction,
  submitBtnAction,
  randomBtnAction,
  getAstroidDetialsAction,
  getAstroidListAction,
  resetBtnAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayAstroid);
