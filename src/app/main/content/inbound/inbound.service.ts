import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Inbound } from './inbound';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class InboundService {

  constructor(private http: Http) { }

//retrieve

getInbounds()
{
  return this.http.get('http://localhost:3000/api/inbounds').pipe(
  map(res => res.json()));
}
getExtensions()
{
  return this.http.get('http://localhost:3000/api/extensions').pipe(
  map(res => res.json()));
}
addInbound(newInbound)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://localhost:3000/api/inbound',newInbound,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteInbound(id)
{
  return this.http.delete('http://localhost:3000/api/inbound/'+id).pipe(map(res => res.json()));
}


}
