
const data=require("../data.json")

exports.page = (req, res, next) => {
    res.render('index', { data:data });
}

exports.subdata = (req, res, next) => {
    console.log(req.query.index);
    
    res.render('products',{data:data[req.query.index]});
}