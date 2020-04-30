const express = require('express');
const router = express.Router();

const defaultTorrents= [
  {
    id: 0,
    title: "SandyJenkins",
    state: 'Seeding',
    progress: 34,
    size: {
      actual: 11042,
      weight: "MB"
    },
    timeRemaining: {
      actual: 700,
      weight: "sec"
    },
    shareRatio: 0.4
  },
  {
    id: 1,
    title: "Yo.Mommas.House.1982.miFOUIEHafoneuefaoeh.faw",
    state: 'Downloading',
    progress: 74,
    size: {
      actual: 1042,
      weight: "MB"
    },
    timeRemaining: {
      actual: 1500,
      weight: "sec"
    },
    shareRatio: 0.4
  },
  {
    id: 2,
    title: "Damn.Daniel.Wheres.Yo.Crawfish.2020.BlacK_MaMbA",
    state: 'Downloading',
    progress: 64,
    size: {
      actual: 1042,
      weight: "MB"
    },
    timeRemaining: {
      actual: 500,
      weight: "sec"
    },
    shareRatio: 0.4
  },
  {
    id: 3,
    title: "1917.2019.jw48jaf9w48a.a4ga.4wg.aw4.ga4g.",
    state: 'Downloading',
    progress: 4,
    size: {
      actual: 1042,
      weight: "MB"
    },
    timeRemaining: {
      actual: 500,
      weight: "sec"
    },
    shareRatio: 0.4
  }
];

// GET Full List of torrents
router.get('/', (req, res, next) => {
  res.send([1, 2]);
});

/* GET torrent details. */
router.get('/:id', async function(req, res, next) {
  const torrentID = +req.params.id;
  const torrent = await defaultTorrents.find(torrent => torrent.id === torrentID);
  res.send(torrent);
});

module.exports = router;