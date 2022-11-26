const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ChinduAnurag:model52@cluster0.jrwfyam.mongodb.net/e-library?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then(()=>{
    console.log("Mongodb Connected")
 } ).catch((error)=>{
    console.log(error);
 })
