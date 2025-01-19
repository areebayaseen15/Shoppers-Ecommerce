import { defineField} from "sanity";


export default defineField(
    {
        type:"document",
        name:"banner",
        title:"banner",
        fields:[
            defineField({
                name:"title",
                title:"title",
                type:"string",
            }),

            defineField({
                name:"subtitle",
                title:"Sub Title",
                type:"string",
            }),
            defineField({
                name:"Price",
                title:"Starting From",
                type:"number",
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
                description:"Banner Image",
                validation:(rule)=>rule.required(),
                options:{
                    hotspot:true,
                },
                preview:{
                    select:{
                        imageUrl:"asset.url",
                        title:"caption",
                    }
                   
                }
            }),
        ]
    }
)