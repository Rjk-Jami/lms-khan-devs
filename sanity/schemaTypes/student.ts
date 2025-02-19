import { defineField, defineType } from "sanity";

export default defineType({
    name: "student",
    title:"student",
    type:"document",
    fields:[
        defineField({
            name:"firstName",
            title:"First Name",
            type:"string",
            validation:(Rule)=>Rule.required()
        }),
        
        defineField({
            name:"lastName",
            title:"Last Name",
            type:"string",
            validation:(Rule)=>Rule.required()
        }),
        defineField({
            name:"email",
            title:"Email",
            type:"string",
            validation:(Rule)=>Rule.required().email()
        }),
        defineField({
            name:"clerkUserId",
            title:"Clerk User ID",
            type:"string",
            validation:(Rule)=>Rule.required()
        }),
        defineField({
            name:"profileImageUrl",
            title:"Profile Image URL",
            type:"url",
            validation:(Rule)=>Rule.required().uri({allowRelative:false})
        }),
        defineField({
            name:"createdAt",
            title:" Created At",
            type:"datetime",
            initialValue:()=> new Date().toISOString(),
            readOnly:true
        })
    ]
})