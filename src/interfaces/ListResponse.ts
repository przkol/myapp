export interface ListResponse<T>{
    data:{
        results:T[];
        count:number;
        next:string;
        previous:string;
    }
}