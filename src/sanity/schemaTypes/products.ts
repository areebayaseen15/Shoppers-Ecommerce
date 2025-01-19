import { defineField} from "sanity";


export default defineField({
    name :"product",
    title:"Product",
    type:"document",
    fields:[
        defineField({
            name:"title",
            title:"title",
            type:"string",
            description:"Keep the title relative to the Product",
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"title",
                maxLength:96,
            },
            validation:(rule)=>rule.required()
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

        defineField({
            name:"price",
            title:"Price",
            type:"number",
            validation:(rule)=> rule.required(),
        }),
        defineField({
            name:"rowprice",
            title:"Row Price",
            type:"number",
        }),

        defineField({
            name:"ratings",
            title:"Ratings",
            type:"number",
            description:"Rating must be equal or below 5"
        }),

            defineField({
                name:"isnew",
                title:"New arrival",
                type:"boolean",
            }),

            defineField({
                name:"position",
                title:"Position",
                type:"string",
            }),

            defineField({
                name:"brand",
                title:"Brand",
                type:"string",
            }),
            defineField({
                name:"quantity",
                title:"Quantity",
                type:"number",
            }),

    ],
    preview:{
        select:{
            title:"title",
            media:"image",
            position:"position",
        },
    },

})