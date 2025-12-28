import express from 'express';
import wishModel from '../models/Wish.js';

const app = express();

const wishesReq = async (req, res) => {
    try {
        const createdReq = req.body;
        wishModel.insertOne(createdReq);
        res.status(201)
        console.log(createdReq);
        console.log("Wishes Check");
    } catch (err) {
        console.error("Wishes Error: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

const wishesRes = async (req, res) => {
    try {
        const wishesRender = await wishModel.find().sort({time: -1});
        res.status(200).json(wishesRender);
        console.log(wishesRender);
    } catch (err) {
        console.error("Couldn't send render JSON: ", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export { wishesReq, wishesRes };