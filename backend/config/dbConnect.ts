import mongoose from "mongoose"

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Is returning");
    return;
  };

  let DB_URI: string = "";
  if (process.env.NODE_ENV === "development") 
    DB_URI = process.env.DB_LOCAL_URI!
  if (process.env.NODE_ENV === "production") 
    // after variable ! means that won't be undefined 
    DB_URI = process.env.DB_URI!

    console.log("BEFORE TRYING TO CONNECT");
    console.log(DB_URI);
    
    await mongoose.connect(DB_URI).then((con) => console.log("DB Connected"));
   console.log("AFTER TRIED TO CONNECT");  
};

export default dbConnect;