import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface SubDocumentById {
  id: string;
  name: string;
  description: string;
  subject_id: string;
  class: string;
  traner_id: string;
  academic_year: string;
  expire_time: string;
  video: string;
  audio: string;
  document: string;
  add_date: string;
  subject: string;
  trainer_name: string;
  num_rows: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetdocsService {

  constructor(private http: HttpClient) { }
  getDocumentById(): Observable<SubDocumentById[]> {
    // tslint:disable-next-line: max-line-length
    return this.http.get<SubDocumentById[]>('https://www.mziweb.com/schoolapp/mziweb_schoolapp/getDocumentById.php?id=2&tId=4');
  }
}
