const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema(

{

    customer:{


        name:{
            type:String,
            required:true,
            trim:true
        },


        email:{
            type:String,
            required:true,
            trim:true
        },


        phone:{
            type:String,
            required:true
        },


        address:{
            type:String,
            required:true
        }


    },

    products:[

        {


            productId:{
                type:String,
                required:true
            },


            title:{
                type:String,
                required:true
            },


            image:{
                type:String,
                default:""
            },


            price:{
                type:Number,
                required:true
            },


            quantity:{
                type:Number,
                required:true,
                default:1
            }


        }


    ],

    totalAmount:{


        type:Number,

        required:true


    },

    status:{


        type:String,


        enum:[

            "Pending",

            "Confirmed",

            "Shipped",

            "Delivered",

            "Cancelled"

        ],


        default:"Pending"


    }





},


{

    timestamps:true

}



);



module.exports =
mongoose.model(
"Order",
orderSchema
);