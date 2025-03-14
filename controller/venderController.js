const Vender = require("../model/venderModel.js")

const addNewVender = async(req, res) => {
     try{
        const { name,mobile } = req.body;
     if(!name || !mobile){
        return res.status(400).json({ message: "Name is required" });
     }
     const vender = new Vender({name,mobile});
     await vender.save()
     res.json({ message: "Vender added successfully" });
     }

     catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error Occurs" });
      }


}
// get vender
const getVender = async(req,res) =>{
    const vender = await Vender.find();
    res.status(200).json({message:vender});
}

//Delete Vender
const deleteVender = async(req,res) =>{
    try {
        const { id } = req.params;
        await Vender.findByIdAndDelete(id);
        res.json({ message: "Vender deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error Occurs" });
      }
}
const editsell=async (req,res)=>{
    try{
        const { id } = req.params;
        const { name, mobile } = req.body;

      const updateData = {
        name,
        mobile
      };

      const saveUpdatedData = await Vender.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if(!saveUpdatedData){
      return res.status(404).json({ message: "Edit product not found" });
      }

      res.status(200).json({message:"Data edited",user:saveUpdatedData})

    }catch(error){
        console.error(error)
    }
}

module.exports={addNewVender,getVender,deleteVender,editsell}