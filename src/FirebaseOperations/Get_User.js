import { db } from ".././firebase";

export const getUserInfo = (uid) => {
  // search through  the user collection and get the user info
  db.collection("users")
    .where("uid", "==", uid)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        return {
          Name: doc.data().Name,
          UserName: doc.data().UserName,
          ImageURL: doc.data().ImageURL,
        };
      });
    });
};
