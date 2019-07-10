import express from 'express';
import { Methods } from '../types/interface';

export default (db: Methods): express.Router => express.Router()
    .get(
        '/',

        (req, res) => res.send({
            status: 'UP',
        })
    )

    .post(
        '/',

        async (req, res, next) => {
            const { ops: [data] } = await db.createOne();
            res.locals.user = data;
            next();
        },

        (req, res, next) => {
            res.locals.user = {
                ...res.locals.user,
                pet: 'cat'
            }

            next();
        },

        (req, res) => {
            res.send({
                user: res.locals.user
            })
        }
    )
