import {
  queryRef,
  executeQuery,
  mutationRef,
  executeMutation,
  validateArgs
} from 'firebase/data-connect';



const connectorConfig = {
  connector: 'example',
  service: 'tkface',
  location: 'us-central1'
};
const _connectorConfig = connectorConfig;
export { _connectorConfig as connectorConfig };

const createMovieRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovie', inputVars);
}
createMovieRef.operationName = 'CreateMovie';
const _createMovieRef = createMovieRef;
export { _createMovieRef as createMovieRef };

export function createMovie(dcOrVars, vars) {
  return executeMutation(createMovieRef(dcOrVars, vars));
}

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';
const _upsertUserRef = upsertUserRef;
export { _upsertUserRef as upsertUserRef };

export function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
}

const addReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddReview', inputVars);
}
addReviewRef.operationName = 'AddReview';
const _addReviewRef = addReviewRef;
export { _addReviewRef as addReviewRef };

export function addReview(dcOrVars, vars) {
  return executeMutation(addReviewRef(dcOrVars, vars));
}

const deleteReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteReview', inputVars);
}
deleteReviewRef.operationName = 'DeleteReview';
const _deleteReviewRef = deleteReviewRef;
export { _deleteReviewRef as deleteReviewRef };

export function deleteReview(dcOrVars, vars) {
  return executeMutation(deleteReviewRef(dcOrVars, vars));
}

const listMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovies');
}
listMoviesRef.operationName = 'ListMovies';
const _listMoviesRef = listMoviesRef;
export { _listMoviesRef as listMoviesRef };

export function listMovies(dc) {
  return executeQuery(listMoviesRef(dc));
}

const listUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}
listUsersRef.operationName = 'ListUsers';
const _listUsersRef = listUsersRef;
export { _listUsersRef as listUsersRef };

export function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
}

const listUserReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUserReviews');
}
listUserReviewsRef.operationName = 'ListUserReviews';
const _listUserReviewsRef = listUserReviewsRef;
export { _listUserReviewsRef as listUserReviewsRef };

export function listUserReviews(dc) {
  return executeQuery(listUserReviewsRef(dc));
}

const getMovieByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMovieById', inputVars);
}
getMovieByIdRef.operationName = 'GetMovieById';
const _getMovieByIdRef = getMovieByIdRef;
export { _getMovieByIdRef as getMovieByIdRef };

export function getMovieById(dcOrVars, vars) {
  return executeQuery(getMovieByIdRef(dcOrVars, vars));
}

const searchMovieRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'SearchMovie', inputVars);
}
searchMovieRef.operationName = 'SearchMovie';
const _searchMovieRef = searchMovieRef;
export { _searchMovieRef as searchMovieRef };

export function searchMovie(dcOrVars, vars) {
  return executeQuery(searchMovieRef(dcOrVars, vars));
}
