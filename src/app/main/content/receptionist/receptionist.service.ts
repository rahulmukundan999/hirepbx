import { Injectable } from '@angular/core';
import { Http, Headers,HttpModule} from '@angular/http';
//import { Wav } from './receptionist';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()


export class ReceptionistService {

  constructor(private http: Http) { }
  addWav(file:File)
  {
    var headers = new Headers();
    return this.http.post('http://localhost:3000/api/wav',file,{headers:headers}).pipe(
    map(res => res.json()));
  }
  addReceptionist()
  {

  }
  getReceptionists()
  {
    
  }
}