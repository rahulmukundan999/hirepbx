import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Ring } from './ring';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable()



export class RingService {

  constructor(private http: Http) { }
  getRings()
  {
    return this.http.get('http://104.248.51.139:3000/api/rings').pipe(
    map(res => res.json()));
  }
  addRing(newRing)
  {
    var headers = new Headers();
    headers.append('Content-Type','Application/Json');
    return this.http.post('http://104.248.51.139:3000/api/ring',newRing,{headers:headers}).pipe(
    map(res => res.json()));
  }
  
  deleteRing(id)
  {
    return this.http.delete('http://104.248.51.139:3000/api/ring/'+id).pipe(map(res => res.json()));
  }
  
  
  }
  