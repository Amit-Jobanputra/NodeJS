const Practice = require('./practice');

exports.index=(req,res)=>{
    Practice.find()
            .then((data)=>{
                res.send({message:"Data fetched Successfully",data:data})
            })
            .catch((err)=>{
                res.send({message:"Something Wrong",error:err})
            });
};
exports.store=(req,res)=>{
    const data=new Practice({
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        course:req.body.course
    });
    data.save()
        .then(()=>{
            console.log("Inserted Successfully");
            res.send({message:"Record Inserted successfully"})
        })
        .catch((err)=>{
            res.send({message:"Something Wrong",error:err})
        });
};