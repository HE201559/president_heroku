const game = require('../model/game.model');
const mysql = require('../model/db');


exports.createTable = (req, res) =>{
    
    const gameInfo = {
      gameId: req.body.gameId
    };
    console.log("gameid: "+ gameInfo.gameId);
    game.createTable(gameInfo.gameId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found game with gameId.`,
          });
        } else {
          res.status(500).send({
            message: "Error creating table with gameId "
          });
        }
      }
    });
}


exports.getPot = (req, res) =>{
    game.getPot(req.params.gameId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found game with gameId ${req.params.gameId}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving pot with gameId " + req.params.gameId,
            });
          }
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(data);
        }
      });
}

exports.delPot = (req, res) =>{
    game.delPot(req.params.gameId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found game with gameId ${req.params.gameId}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving pot with gameId " + req.params.gameId,
            });
          }
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(data);
        }
      });
};

exports.setOnePot = (req, res) =>{
    game.setOnePot(req.params.gameId, req.params.card, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found game with gameId ${req.params.gameId}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving pot with gameId " + req.params.gameId,
            });
          }
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(data);
        }
      });
};


exports.delCard = (req, res) =>{
    game.delCard(req.params.gameId, req.params.user, req.params.card, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found game with gameId ${req.params.gameId}.`,
            });
          } else {
            res.status(500).send({
              message: "Error retrieving pot with gameId " + req.params.gameId,
            });
          }
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          res.send(data);
        }
      });
};

exports.setDeck = (req, res) => {
  game.setDeck(req.params.gameId, (err, data) =>{
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found game with gameId ${req.params.gameId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error setting decks with gameId " + req.params.gameId,
        });
      }
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  })
}

exports.getDeck = (req, res) => { 
  game.getDeck(req.params.gameId, req.params.userId, (err, data) =>{
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found game with gameId ${req.params.gameId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving pot with gameId " + req.params.gameId,
        });
      }
    } else {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  });
};