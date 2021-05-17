import db from '../../../firebase';

export const setUserDetails = (userId) => {
    // add user details in
    db.collection('userDetails').doc(userId).set({
        userId: userId,
        verified: false,
        address: {
            aptNum: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        }
    }).then((docRef) => {
        console.log('UserDetails added with ID: ', docRef.id);
    }).catch((e) => {
        console.error("Error adding document: ", e);
    })
}