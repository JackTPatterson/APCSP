//* -- This file is designated to appending data from the firestore database to a list and then pushing that data to an HTML table --

$('document').ready(function () { //*starts function on start

            db.collection("players").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (e) {
                    players.push({ //* pushes data to list
                        name: e.data()['name'],
                        score: e.data()['score'],
                    })
                    players.sort((a, b) => parseFloat(a.score) - parseFloat(b.score)); //* this is responsible for sorting the data by high score to low score
                })

               for (i = 0; i <= players.length - 1; i++){
                    $('#dataTable > tbody:last').after('<tr style="color: white;"><td>' 
                    + players[i]['name'] + '</td><td>' 
                    + players[i]['score'] + '</td></tr>');
                };
            });
        });
