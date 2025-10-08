const Student=require('./student');

exports.index=(req,res)=>{
    Student.find()
    .then((students)=>{
                res.send({message:"Students fetched successfully",students:students});
    })
    .catch((error)=>{
        res.send({message:"Failed to fetch students",error:error});
    });
};

exports.show=(req,res)=>{
    Student.findById(req.params.id)
    .then((student)=>{
        console.log(student);
        res.send({messagr:"Student found",student:student});
    })
    .catch((error)=>{
        res.send({message:"Student not found",error:error});
    });
};

exports.store=(req,res)=>{
    const student=new Student({
    name:req.body.name,
    department:req.body.department,
    startYear:req.body.startYear,
    endYear:req.body.endYear,
    enrollment:req.body.enrollment,
    address:req.body.address
});
student
    .save()
    .then(()=>{
        console.log("Student Recored Saved");

    })
    .catch((error)=>{
        console.log("Error Saving Student:",error);
    });
    res.send({message:"Student record created successfully",student:student});
};

exports.update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((student)=>{
        res.send({message:"Student record updated successfully",student:student});
    })
    .catch((error)=>{
        res.send({message:"Failed to update student record",error:error});
    });
};
exports.delete=(req,res)=>{
    Student.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.send({message:"Student record deleted successfully"});
    })
    .catch((error)=>{
        res.send({message:"Failed to delete student record",error:error});
    });
};
