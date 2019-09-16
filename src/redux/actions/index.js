export const search = input => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH", input });
  };
};

export const sortResults = sort => {
  return (dispatch, getState) => {
    dispatch({ type: "SORT_RESULTS", sort });
  };
};

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_PROJECT", project });
  };
};

export const updateResults = results => {
  return (dispatch, getState) => {
    dispatch({ type: "UPDATE_RESULTS", results });
  };
};

export const register = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: credentials.firstName,
            lastName: credentials.lastName,
            favorites: []
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS", credentials });
      })
      .catch(error => {
        dispatch({ type: "REGISTER_ERROR", error });
      });
  };
};

export const login = credentials => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "LOGIN_ERROR", error });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const saveFavorite = (venue, loved) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const userId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    const venueId = venue.id;
    const user = firestore.collection("users").doc(userId);

    if (loved) {
      user.update({
        favorites: firestore.FieldValue.arrayUnion(venueId)
      });
    } else {
      user.update({
        favorites: firestore.FieldValue.arrayRemove(venueId)
      });
    }
  };
};
