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
  return this.http.get('http://localhost:3000/api/extensions').pipe (
  map(res => res.json()));
}
addExtension(newExtension)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://localhost:3000/api/extension',newExtension,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteExtension(id,extension)
{
  return this.http.delete('http://localhost:3000/api/extension/'+id+'/'+extension).pipe(map(res => res.json()));
}


}
