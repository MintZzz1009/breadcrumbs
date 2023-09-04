const express = require('express');
const db = require('./mysql');

const router = express.Router();

// grandparent 페이지 생성
router.post('/grandparents', (req, res) => {
    const { name, contents } = req.body;
    const sql = `INSERT INTO grandparents (name, contents) VALUES (?, ?);`;
    db.query(sql, [name, contents], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        return res.json(results);
    });
});

// grandparent 페이지 불러오기
router.get('/grandparents/:gpId', (req, res) => {
    const { gpId } = req.params;
    const getPage = `SELECT * FROM grandparents WHERE id=?;`;
    let pageInfo, subPageList;
    db.query(getPage, [gpId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        [pageInfo] = results;
    });
    const getSubPages = `SELECT * FROM parents where p_of_parent=?;`;
    db.query(getSubPages, [gpId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        subPageList = results;
    });
    return res.status(200).json({ pageInfo, subPageList });
});

// parent 페이지 생성
router.post('/grandparents/:gpId/parents', (req, res) => {
    const { gpId: p_of_parent } = req.params;
    const { name, contents } = req.body;
    const sql = `INSERT INTO parents (name, contents, p_of_parent) VALUES (?, ?, ?);`;
    db.query(sql, [name, contents, p_of_parent], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        return res.json(results);
    });
});

// parent 페이지 불러오기
router.get('/grandparents/:gpId/parents/:pId', (req, res) => {
    const { gpId, pId } = req.params;
    const getPage = `SELECT * FROM parents WHERE id=?;`;
    let pageInfo, subPageList;
    db.query(getPage, [pId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        [pageInfo] = results;
    });
    const getSubPages = `SELECT * FROM childs where p_of_childs=?;`;
    db.query(getSubPages, [pId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        subPageList = results;
    });
    return res.status(200).json({ pageInfo, subPageList });
});

// child 페이지 생성
router.post('/grandparents/:gpId/parents/:pId/childs', (req, res) => {
    const { gpId: pp_of_child, pId: p_of_child } = req.params;
    const { name, contents } = req.body;
    const sql = `INSERT INTO childs (name, contents, p_of_child, pp_of_child) VALUES (?, ?, ?, ?);`;
    db.query(
        sql,
        [name, contents, p_of_child, pp_of_child],
        (error, results, fields) => {
            if (error) throw error;
            console.log(results);
            return res.json(results);
        }
    );
});

// child 페이지 불러오기
router.get('/grandparents/:gpId/parents/:pId/childs/:cId', (req, res) => {
    const { gpId, pId, cId } = req.params;
    const getPage = `SELECT * FROM childs WHERE id=?;`;
    let pageInfo, subPageList;
    db.query(getPage, [cId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        [pageInfo] = results;
    });
    const getSubPages = `SELECT * FROM grandchilds where p_of_grandchilds=?;`;
    db.query(getSubPages, [cId], (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        subPageList = results;
    });
    return res.status(200).json({ pageInfo, subPageList });
});

// grandchild 페이지 생성
router.post(
    '/grandparents/:gpId/parents/:pId/childs/:cId/grandchilds',
    (req, res) => {
        const {
            gpId: ppp_of_grandchild,
            pId: pp_of_grandchild,
            cId: p_of_grandchild,
        } = req.params;
        const { name, contents } = req.body;
        const sql = `INSERT INTO parents (name, contents, p_of_grandchild, pp_of_grandchild, ppp_of_grandchild) VALUES (?, ?, ?, ?);`;
        db.query(
            sql,
            [
                name,
                contents,
                p_of_grandchild,
                pp_of_grandchild,
                ppp_of_grandchild,
            ],
            (error, results, fields) => {
                if (error) throw error;
                console.log(results);
                return res.json(results);
            }
        );
    }
);

// grandchild 페이지 불러오기
router.get(
    '/grandparents/:gpId/parents/:pId/childs/:cId/grandchilds/:gcId',
    (req, res) => {
        const { gpId, pId, cId, gcId } = req.params;
        const getPage = `SELECT * FROM grandchilds WHERE id=?;`;
        let pageInfo;
        db.query(getPage, [gcId], (error, results, fields) => {
            if (error) throw error;
            console.log(results);
            [pageInfo] = results;
        });
        return res.status(200).json({ pageInfo });
    }
);

module.exports = router;
