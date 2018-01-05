const express = require('express');
const app = express();

const songs = [
  {songID: 1,
  songTitle: "Jet Black",
  performer: "Jawbreaker",
  genre: "Punk"
  Album: "Dear You",
  }
  {songID: 2,
  songTitle: "You Gots to Chill",
  performer: "EPMD",
  genre: "hipHop"
  Album: "Strictly Buisness",
  }
  {songID: 3,
  songTitle: "Mass Appeal",
  performer: "GangStarr",
  genre: "hipHop"
  Album: "Hard to Earn",
  }
  {songID: 4,
  songTitle: "Whiskey Bent and Hell Bound",
  performer: "Hank Williams, Jr.",
  genre: "Country"
  Album: "Whiskey Bent and Hell Bound",
  }
  {songID: 5,
  songTitle: "Headmaster's Ritual",
  performer: "The Smiths",
  genre: "College"
  Album: "Meat is Murder",
  }
  {songID: 6,
  songTitle: "Horror Movie Rap",
  performer: "Ganksta N-I-P",
  genre: "hipHop"
  Album: "The South Park Psycho",
  }
]
app.get('/songs', (request, response) => {
    response.send('all songs here');
});
app.get('/songs/hipHop', (request, response) => {
    response.send('all hip hop songs here');
});
app.get('/songs/songID', (request, response) => {
    response.send('aspecific song here');
});
app.get('/songs/hipHop/performer', (request, response) => {
    response.send('all hip hop performers here');
});
app.get('/songs/hipHop/performer/albums', (request, response) => {
    response.send('all hip hop performer albums here');
});
app.get('/songs/hipHop/performer/album/songID', (request, response) => {
    response.send('all hip hop performer song from an album here');
});
app.listen(3000, () => {
    console.log("Listen to these jamz!");
});

Time box is up..see ya'll tomorrow!
// comedians = [
//     {id: 1, name: 'Dave Chapelle'},
//     {id: 2, name: 'Tom Segura'},
//     {id: 3, name: 'John Mulaney'},
//     {id: 4, name: 'Nate Bargatze'}
// ];
//
// // app.get('/', (request, response) => {
// //     response.send('we bout it bout it like p');
// // });
//
// // app.get('/comedians', (request, response) => {
// //     response.send(comedians);
// // });
//
// const videos = [
//     {id: 1,
//     title: "America is the Greatest Country in the United States",
//     url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"},
//     {id: 2,
//     title: "Micheal Che Matters",
//     url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"},
//     {id: 3,
//     title: "Baby Cobra",
//     url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"}
//   ];
//       //Request.Params is a combination of the keys/values you'll find in Request.Querystring, Request.Form, Request.Cookies, Request.ServerVariables (in that order)
//
//     app.get('/videos/id/1', (request, response) => {
//       for (let i = 0; i < videos.length; i++) {
//       if (Number(videos[i].id) === Number(request.params.id)) {
//         return
//         {response.send(videos[i]);}
//       }
//     }
//       return response.send("This id does not exist in the system");
//     });
//
// app.listen(3000, () => {
//   console.log('i hear what choo sayin playboy')
// })

//CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });
//
// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });
