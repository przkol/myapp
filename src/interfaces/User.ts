type Gender ='male'|'female'


export interface User{
    name:string;
    id:string,
    email:string,
    gender:Gender,
    status:string,
}
export interface NewUser{
    name:string;
    email:string,
    gender:Gender,
    status:string,
}