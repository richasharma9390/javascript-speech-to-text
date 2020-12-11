var express = require('express')
var router = express.Router();
const fs = require('fs');
const path = require('path');


/* 1) list of all TV Shows using GET*/
let reqCounter = 0;
router.get('/getAllShows', function (req, res, next) {

    // let rawdata = fs.readFileSync('D:\\Sample\\TV Show\\routes\\shows.json');    
    // console.log('Request Received no.', reqCounter);
    reqCounter++;
    const dirPath = path.join(__dirname, 'shows11.json');
    let rawdata = fs.readFileSync(dirPath);
    let showsData = JSON.parse(rawdata);
    showsData = showsData.filter(i => i.poster_link);
    res.json(showsData);
});


router.get('/getShow/:id', function (req, res, next) {
    const dirPath = path.join(__dirname, 'shows11.json');
    let rawdata = fs.readFileSync(dirPath);
    let showsData = JSON.parse(rawdata);
    let foundShow = showsData.find(i => i.id == req.params.id);
    if (foundShow) {
        res.json(foundShow);
    } else {
        res.json("No TV Show found");
    }
});

router.get('/searchShow/:searchText', function (req, res, next) {
    const dirPath = path.join(__dirname, 'shows11.json');
    let rawdata = fs.readFileSync(dirPath);
    let showsData = JSON.parse(rawdata);
    // console.log(showsData)
    let foundShow = showsData.filter(i => i.title && i.title.toString().toLowerCase().includes(req.params.searchText.toLowerCase()));
    if (foundShow) {
        res.json(foundShow);
    } else {
        res.json("No TV Show found");
    }
});

router.get('/getShows/:page', function (req, res, next) {
    const dirPath = path.join(__dirname, 'shows11.json');
    let rawdata = fs.readFileSync(dirPath);
    let showsData = JSON.parse(rawdata);
    let page = parseInt(req.params.page);
    let startIndex = 20 * (page - 1);
    let lastIndex = page * 20;
    showsData = showsData.filter(i => i.poster_link)
    let foundShow = showsData.filter((i, index) => (index >= startIndex) && (index < lastIndex));
    if (foundShow) {
        res.json(foundShow);
    } else {
        res.json("No TV Show found");
    }

});

// router.get('/convert', function (req, res, next) {
//     let result = [];
//     let dirPath = path.join(__dirname, 'id_name.json');
//     let idName = JSON.parse(fs.readFileSync(dirPath));
//     dirPath = path.join(__dirname, 'ID_Link_url.json');
//     let idUrl = JSON.parse(fs.readFileSync(dirPath));
//     dirPath = path.join(__dirname, 'TMDB Movies.json');
//     let tmdbMovies = JSON.parse(fs.readFileSync(dirPath));

//     let count = 0;
//     let counter = 0;
//     let objArr = [];
//     tmdbMovies.map((tmdb, index) => {
//         console.log('Counter ::', counter);
//         result.push(tmdb);
//         counter++;
//         idName.find((idname => {
//             if (idname.movieName && idname.movieName.indexOf(tmdb.original_title) !== -1 && !tmdb.poster_link) {
//                 idUrl.find((idurlobj) => {
//                     if (idname.id === idurlobj.id) {
//                         result[index] = { ...tmdb, poster_link: idurlobj.link }
//                         count++;
//                         return true;
//                     }
//                     return false;
//                 })
//             }
//             return false;
//         }))
//         return tmdb;

//     })
//     console.log('Count=', count);
//     console.log('objArr===', objArr);

//     dirPath = path.join(__dirname, 'shows11.json');

//     fs.writeFile(dirPath, JSON.stringify(result), function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//     });
// });

module.exports = router