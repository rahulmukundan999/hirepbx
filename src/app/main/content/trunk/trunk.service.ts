import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { map } from 'rxjs/operators';



@Injectable()



export class TrunkService {

  constructor(private http: Http) { }

//retrieve

getTrunks()
{
  return this.http.get('http://104.248.51.139:3000/api/trunks').pipe (
  map(res => res.json()));
}
addTrunk(newTrunk)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://104.248.51.139:3000/api/trunk',newTrunk,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteTrunk(id)
{
  return this.http.delete('http://159.89.239.168:3000/api/trunk/'+id).pipe(map(res => res.json()));
}


}
