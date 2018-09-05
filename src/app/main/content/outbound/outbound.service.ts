import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Outbound } from './outbound';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()


export class OutboundService {

  constructor(private http: Http) { }
  getOutbounds()
{
  return this.http.get('http://localhost:3000/api/outbounds').pipe(
  map(res => res.json()));
}
addOutbound(newOutbound)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://localhost:3000/api/outbound',newOutbound,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteOutbound(id)
{
  return this.http.delete('http://localhost:3000/api/outbound/'+id).pipe(map(res => res.json()));
}


}
