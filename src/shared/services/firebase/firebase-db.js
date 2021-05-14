import db, {auth} from '../../../firebase';

export const setUserDetails = (userId) => {
    // check if user already exists

    // add user details in
    db.collection('userDetails').add({
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