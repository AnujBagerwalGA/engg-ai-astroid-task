import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  searchTextAction,
  submitBtnAction,
  randomBtnAction,
  getAstroidDetialsAction,
  getAstroidListAction,
} from '../store/actionCreater';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { isEmpty } from 'lodash';

const SearchAstriod = (props) => {
  useEffect(() => {
    props.getAstroidListAction();
  }, []);

  useEffect(() => {
    if (!isEmpty(props.selectedAstroidDetails)) {
      props.history.push(`${props.selectedAstroidDetails.id}`);
    }
  }, [props.selectedAstroidDetails]);

  return (
    <div>
      <Container>
        <div className="display-search">
          <InputGroup>
            <FormControl
              placeholder="Enter Asteroid ID"
              value={props.searchText}
              onChange={(e) => props.searchTextAction(e.target.value)}
            />
            <InputGroup.Append>
              <Button
                variant="secondary"
                disabled={!props.searchText}
                onClick={() => props.getAstroidDetialsAction(props.searchText)}
              >
                Submit
              </Button>
              <Button onClick={() => props.randomBtnAction()}>
                Random Asteroid
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAstriod);
