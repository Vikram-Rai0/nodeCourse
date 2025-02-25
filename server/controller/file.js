export const getFile=(req,res)=>{
   const file =req.files;
   console.log(file,": file");
   console.log(`${file[0]/destination}:destination`);
   console.log()
}