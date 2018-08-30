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
  return this.http.get('api/extensions').pipe(
  map(res => res.json()));
}
addExtension(newExtension)
{
  var headers = new Headers();
  headers.append('Content-Type','Application/Json');
  return this.http.post('api/extension',newExtension,{headers:headers}).pipe(
  map(res => res.json()));
}

deleteExtension(id,extension)
{
  return this.http.delete('api/extension/'+id+'/'+extension).pipe(map(res => res.json()));
}


}
