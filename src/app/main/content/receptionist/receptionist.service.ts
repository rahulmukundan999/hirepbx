import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
//import { Wav } from './receptionist';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()


export class ReceptionistService {

  constructor(private http: Http) { }
  fd = new FormData();
  addWav(file)
  {
    
    
    this.fd.append('file', file, file.name);
console.log(this.fd);
    return this.http.post('http://localhost:3000/api/addWav',this.fd).pipe(
    map(res => res.json()));
  }
  getWavs()
  {
    return this.http.get('http://localhost:3000/api/wavs').pipe(
      map(res => res.json()));


  }
  addReceptionist(newReceptionist)
  {
    

  var headers = new Headers();
  
  headers.append('Content-Type','Application/Json');
  return this.http.post('http://localhost:3000/api/receptionist',newReceptionist,{headers:headers}).pipe(
  map(res => res.json()));

  }
  getReceptionists()
  {
    return this.http.get('http://localhost:3000/api/receptionists').pipe(
    map(res => res.json()));
    

  }
deleteReceptionist(id)
{
  return this.http.delete('http://localhost:3000/api/receptionist/'+id).pipe(map(res => res.json()));
}
}