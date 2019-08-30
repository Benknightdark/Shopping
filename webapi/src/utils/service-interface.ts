import { Observable } from "rxjs";
export interface IService<T1, T2> {
    create(createCatDto: T2): Observable<T1>;
    update(id: string, createCatDto: T2): Observable<number>
    findAll(): Observable<T1[]>
    findById(id: string): Observable<T1>
    deleteById(id:string):void
    deleteAll(): void
}

