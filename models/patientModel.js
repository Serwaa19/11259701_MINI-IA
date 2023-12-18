const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
  {
    name:{
      PatientId: String,
      Surname: String,
      OtherName: String,
      Gender: String,
      PhoneNumber: String,
      ResidentAddress: String,
      EmergencyContactName:String,
      EmergencyContactPhone:String,

      required: [true, "Please enter a patient name"]
    }
  }
)