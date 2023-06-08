import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { createPublicKey } from 'crypto';
import { data } from 'jquery';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})



export class UserinfoComponent implements OnInit {

  // ユーザーリスト
  UserList: any = [];
  //　テストデータの構築
  // 2担当目
  UserList02: any = [];
  //　テストデータの構築
  // 3担当目
  UserList03: any = [];
  //　テストデータの構築
  // 4担当目
  UserList04: any = [];
  //　テストデータの構築
  // 5担当目
  UserList05: any = [];
  //　テストデータの構築
  // 5担当目
  UserListShidou: any = [];
  // モーダルタイトル
  ModalTitle = "";
  // 追加・編集システムのアクティブ状態
  ActivateAddEditSystemComp: boolean = false;
  // ユーザー情報
  userinfo: any;
  // closebutton要素を参照するためのViewChild
  @ViewChild('closebutton') closebutton?: ElementRef;
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    // 初期化時にユーザーリストを更新
    this.refreshList();
    this.refreshList02();
    this.refreshList03();
    this.refreshList04();
    this.refreshList05();
    this.refreshListShidou();
  }
  // ユーザーリストを更新する関数
  refreshList() {
    this.service.getUserInfoList().subscribe(data => {
      this.UserList = data;
    });
  }
  //　テストデータの構築
  // 2担当目
  refreshList02() {
    this.service.getUserInfoList02().subscribe(data => {
      this.UserList02 = data;
    });
  }
  //　テストデータの構築
  //　3担当
  refreshList03() {
    this.service.getUserInfoList03().subscribe(data =>{
      this.UserList03 = data;
    });
  }
  //　テストデータの構築
  //　4担当
  refreshList04() {
    this.service.getUserInfoList04().subscribe(data =>{
      this.UserList04 = data;
    });
  }
  //　テストデータの構築
  //　5担当
  refreshList05() {
    this.service.getUserInfoList05().subscribe(data =>{
      this.UserList05 = data;
    });
  }
  //  テストデータの構築
  //　指導監
  refreshListShidou() {
    this.service.getUserInfoListShidou().subscribe(data =>{
      this.UserListShidou = data;
    });
  }
  
  // 追加ボタンがクリックされた時に実行される関数
  addClick() {
    this.userinfo = null;
    this.ModalTitle = "追加";
    this.ActivateAddEditSystemComp = true;
  }
  // 編集ボタンがクリックされた時に実行される関数
  editClick(item: any) {
    this.userinfo = item;
    this.ModalTitle = "編集";
    this.ActivateAddEditSystemComp = true;
  }
  // add-editコンポーネントからのコールバック関数
  callback(value: string) {
    if (this.closebutton !== undefined) {
      // closebutton要素を参照して、モーダルを閉じてユーザーリストを更新
      this.closebutton.nativeElement.click();
      this.refreshList();
    } else {
      console.log("closebutton undefined");
    }
  }
  // 削除ボタンがクリックされた時に実行される関数
  deleteClick(item: any) {
    if (confirm('削除しますか?')) {
      // ユーザーを削除して、ユーザーリストを更新
      this.service.deleteUser(item.Id).subscribe(data => {
        this.refreshList();
      })
    }
  }
  // モーダルの閉じるボタンがクリックされた時に実行される関数
  closeClick() {
    // 追加・編集システムを非アクティブにして、ユーザーリストを更新
    this.ActivateAddEditSystemComp = false;
    this.refreshList();
  }
  // ユーザー情報を更新する関数
  updateItem(item: any) {

      if (item.comment.length > 40 ){
        alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
        item.comment = item.comment.substr(0,40);
      }

        this.service.updateUser(item.id, item).subscribe(data => {    
        });
  }
  updateItem02(item: any) {

    if (item.comment.length > 40 ){
      alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
      item.comment = item.comment.substr(0,40);
    }

    this.service.updateUser02(item.id, item).subscribe(data => {

    });
  }
  updateItem03(item: any) {

    if (item.comment.length > 40 ){
      alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
      item.comment = item.comment.substr(0,40);
    }

    this.service.updateUser03(item.id, item).subscribe(data => {

    });
  }
  updateItem04(item: any) {

    if (item.comment.length > 40 ){
      alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
      item.comment = item.comment.substr(0,40);
    }
    
    this.service.updateUser04(item.id, item).subscribe(data => {

    });
  }
  updateItem05(item: any) {

    if (item.comment.length > 40 ){
      alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
      item.comment = item.comment.substr(0,40);
    }

    this.service.updateUser05(item.id, item).subscribe(data => {

    });
  }
  updateItemShidou(item: any) {

    if (item.comment.length > 40 ){
      alert('コメントが41字以上入力されています。41文字目以降は切り捨てられました。');
      item.comment = item.comment.substr(0,40);
    }

    this.service.updateUserShidou(item.id,item).subscribe(data =>{

    });
  }

}
  /*
このコードは、Angularフレームワークを使用してユーザー情報を管理するためのコンポーネントです。

UserinfoComponentは、APIサービスを呼び出してユーザー情報のリストを取得し、それをテーブルに表示します。AddEditComponentコンポーネントを呼び出し、ユーザーの追加、編集、削除を処理します。

UserListは、refreshList()関数で取得したユーザー情報を保持する配列です。ModalTitleは、モーダルウィンドウのタイトルを設定するために使用されます。ActivateAddEditSystemCompは、AddEditComponentコンポーネントがアクティブになるかどうかを制御します。

addClick()関数は、ユーザーの追加ボタンがクリックされたときに呼び出され、ActivateAddEditSystemCompをtrueに設定し、AddEditComponentをアクティブにします。editClick()関数は、ユーザーの編集ボタンがクリックされたときに呼び出され、選択されたユーザーの情報をuserinfo変数に設定し、AddEditComponentをアクティブにします。

deleteClick()関数は、ユーザーの削除ボタンがクリックされたときに呼び出され、確認ダイアログを表示し、ユーザーを削除します。

callback()関数は、AddEditComponentが完了したときに呼び出されます。closebutton変数にElementRefを使用してアクセスし、モーダルを閉じ、refreshList()関数を呼び出してユーザー情報のリストを更新します。

updateItem()関数は、ユーザー情報を更新します。

このコンポーネントは、ApiServiceServiceという別のサービスを使用して、バックエンドのAPIと通信しています。
*/
