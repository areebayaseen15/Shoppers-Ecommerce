import { defineField} from "sanity";


export default defineField({
    name :"category",
    title:"Category",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"title",
            type:"string",
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"string",
        }),
      
     
        defineField({
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot:true,
            },
        }),
    ],
  
})