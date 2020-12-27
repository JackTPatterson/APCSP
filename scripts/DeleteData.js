//* -- This file is responsible for reseting the firestore database to have a fresh game with no scoreboard --

document.getElementById('delete').addEventListener('click', function (e) {
            const ref = db.collection('players')
            ref.onSnapshot((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    ref.doc(doc.id).delete()
                })
            })
        });


