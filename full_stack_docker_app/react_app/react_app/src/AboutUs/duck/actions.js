import * as types from './types';
import axios from 'axios';
import aboutUsUtils from './utils';

const increment = () => dispatch => {
  dispatch({
    type: types.INCREMENT,
  });
}

const decrement = () => dispatch => {
  dispatch({
    type: types.DECREMENT,
  });
}


// GET API Example
const getGETApiData = () => dispatch => {
  console.log("the base api url is : ", process.env.API_URL);
  const getUrl = `${process.env.API_URL}/app1/topics`;
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.get(getUrl)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.GET_API_DATA, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch({ type: types.GET_API_DATA, payload: []}) // with this action upload empty list as an error occured during endpoint call
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//POST API EXAMPLE
const postMethodCall = (id, name, desc) => dispatch => {
  console.log("the base api url is : ", process.env.API_URL);
  const postUrl = `${process.env.API_URL}/app1/topics/add`;
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  const newTopic = aboutUsUtils.constructPostBody(id, name, desc);
  axios.post(postUrl , newTopic)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.POST_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//PUT API EXAMPLE
const putMethodCall = (id, name, desc) => dispatch => {
  console.log("the base api url is : ", process.env.API_URL);
  const putUrl = `${process.env.API_URL}/app1/topics/update/${id}`; // using string literals here
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  const newTopic = aboutUsUtils.constructPostBody(id, name, desc);
  axios.put(putUrl , newTopic)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.PUT_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//DELETE API EXAMPLE
const deleteMethodCall = (id) => dispatch => {
  console.log("the base api url is : ", process.env.API_URL);
  const postUrl = `${process.env.API_URL}/app1/topics/delete/${id}`; // using string literals here
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.delete(postUrl )
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.DELETE_API_STATUS, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      // dispatch({ type: types.GET_API_DATA, payload: {}})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//GET API WITH DELAY EXAMPLE: where loader is shown during api call
const getGETApiDataWithDelay = () => dispatch => {
  console.log("the base api url is : ", process.env.API_URL);
  const getUrl = `${process.env.API_URL}/app1/topicsWithDelay`;
  dispatch({ type: types.FETCH });  // with this action object make 'isFetching' true in redux state.
  axios.get(getUrl)
    .then(function (response) {
      // handle success
      console.log(response);
      dispatch({ type: types.GET_API_DATA_WITH_DELAY, payload: response.data })   // with this action upload the response in redux store and make 'isFetching' false.
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dispatch({ type: types.GET_API_DATA_WITH_DELAY, payload: []})
    })
    .finally(function () {
      // always executed
      // dispatch({ type: 'GET_TODOS_FINALLY' })
    });
}

//Can define more actions related to this component here

//Public actions which are invoked from the application components
export default {
  increment,
  decrement,
  getGETApiData,
  postMethodCall,
  putMethodCall,
  deleteMethodCall,
  getGETApiDataWithDelay,
  //Can export more actions related to this component here
};
