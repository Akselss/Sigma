const calendar = document.getElementById('calendar').value = '';

duDatepicker('#calendar',{
      range:true,
      minDate:'today',
      theme:'dark',
      events: {
      dateChanged:function (data) {
        console.log('From: ' + data.dateFrom +'\nTo: ' + data.dateTo);

        writeChallengeData(data.dateFrom, data.dateTo);
      },
      onRangeFormat:function (from, to) {
                  // do something
      },
             ready:null,
             shown:null,
             hidden:null
      }

      // options here
});
console.log ("This is messege form bardanis!");
console.log(firebase.database());

const database = firebase.database();
database.useEmulator('127.0.0.1', 9000);

function writeChallengeData(from, to) {
  firebase.database().ref('challenges').push({
    belongsTo: '-MTLdz0KrOTSN8QmByEV',
    name: 'Cold showers',
    from,
    to
  });
}

database.ref('challenges').orderByChild('belongsTo').equalTo('-MTLdz0KrOTSN8QmByEV').on('value', function(snapshot) {
  console.log(snapshot.val());
  snapshot.forEach(function(data) {
      console.log(data.key);
  });
});

// database.ref('challenges').orderByChild('belongsTo').equalTo('-MTLdz0KrOTSN8QmByEV').get().then(function(snapshot) {
//   console.log(snapshot);
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   }
//   else {
//     console.log("No data available");
//   }
// }).catch(function(error) {
//   console.error(error);
// });
