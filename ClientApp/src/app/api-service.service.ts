import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  // バックエンドのAPIのURLを指定  
  readonly apiUrl = 'http://localhost:5094/api/UserInfoes/';
  readonly apiUrl02 = 'http://localhost:5094/UserInfo02/';
  readonly apiUrl03 = 'http://localhost:5094/UserInfo03/';
  readonly apiUrl04 = 'http://localhost:5094/UserInfo04/';
  readonly apiUrl05 = 'http://localhost:5094/UserInfo05/';
  readonly apiUrlShidou = 'http://localhost:5094/UserInfoShidou/';

  // 依存としてHttpClientサービスをアプリケーションクラスに注入
  constructor(private http: HttpClient) { }

  // ユーザー情報リストを取得するためのHttpリクエストを行う関数
  getUserInfoList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  //　テストデータの構築
  // 2担当目
  getUserInfoList02(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl02);
  }
  //　テストデータの構築
  // 3担当目
  getUserInfoList03(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl03);
  }
  //　テストデータの構築
  // 4担当目
  getUserInfoList04(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl04);
  }
  //　テストデータの構築
  // 5担当目
  getUserInfoList05(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl05);
  }
  //  テストデータの構築
  //　指導監
  getUserInfoListShidou(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlShidou);
  }

  // ユーザー情報を追加するためのHttpリクエストを行う関数
  addUser(userinfo: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl, userinfo, httpOptions);
  }

  // ユーザー情報を更新するためのHttpリクエストを行う関数
  updateUser(id: any, userinfo: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + id, userinfo, httpOptions);
  }

  updateUser02(id: any, userinfo02: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl02 + id, userinfo02, httpOptions);
  }

  updateUser03(id: any, UserInfo03: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl03 + id, UserInfo03, httpOptions);
  }

  updateUser04(id: any, userinfo04: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl04 + id, userinfo04, httpOptions);
  }

  updateUser05(id: any, userinfo05: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl05 + id, userinfo05, httpOptions);
  }

  updateUserShidou(id: any,userinfoShidou: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrlShidou + id, userinfoShidou,httpOptions);
  }

  // ユーザー情報を削除するためのHttpリクエストを行う関数
  deleteUser(Id: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.apiUrl + Id, httpOptions);
  }
}
