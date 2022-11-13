
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function GetDocumentWithId<T>(collection: any): Observable<T> {
   return collection.pipe(
      map((actions:any) => {
        return actions.map((a:any)=> {
          const data = a.payload.doc.data() as T;
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      })
    );
}