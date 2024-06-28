export interface ITest {
    name:string;
    url:string;
    icon:any;
}

export interface ITableData {
    id:number;
    title:string;
    user:string;
    check?:boolean;
    date:string;
}
export interface IHttp{
    request<T>(method:string,url:string,params?:unknown):Promise<T>;
}