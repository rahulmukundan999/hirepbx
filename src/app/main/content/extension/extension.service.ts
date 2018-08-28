import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
import { Extension } from './extension';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class ExtensionService {

  constructor(private http: Http) { }

//retrieve

getExtensions()
{
  return this.http.get('http://159.89.239.168:3000/api/extensions').pipe (
  map(res => res.json()));
}
addExtension(newExtension)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://159.89.239.168:3000/api/extension',newExtension,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteExtension(id,extension)
{
  return this.http.delete('http://127.0.0.1:3000/api/extension/'+id+'/'+extension).pipe(map(res => res.json()));
}


}
