
export interface BannerData {
    _id:string;
    _createdAt : string;
    _updatedAt : string;
_rev:string,
image:{
    _type:string;
    asset:{
        _ref:string;
        _type:string;
    };
};
title:string;
subtitle:string;
price:number;
description:string;
}

type ImageAssets={
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    };
};

type  Slug={
    current:"string";
    _type:"slug";

};

type Category={
    _id:string;
    name:string;
}

export interface ProductData{
    title:"string";
    image:ImageAssets;
    quantity:number;
    price:number;
    category:Category[];
    slug:"slug";
    _createdAt:string;
    description:string;
    _updatedAt:string;
    ratings:number;
    brand:string;
    _type:"product";
    _id: string;
    position:string;
    rowprice:number;
    

}

interface UserInfo{
    id:string,
    name:string,
    email:string
}

export interface StoreState {
    cart: any;
    shoppers: {
        cart: ProductData[];
        wishList: ProductData[];
        userInfo:null | UserInfo
    };
}