//* -- This file is responsible for adding data to the firestore database -- */

function addData() {
    db.collection("players").add({ //*Function that adds data to the database
            name: document.getElementById('name-inp').value,
            score: $('#score').html().replaceAll('Score:', '')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error); //* Error reporting
        });
}