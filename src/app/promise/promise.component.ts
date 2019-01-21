import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  myPromise: any;
  promise: any;
  req: any = 'test';
  res: any;

  exdata = [1, 2, 3];
  constructor(
    private http: HttpClient,
  ) {
    this.exdata.forEach(value => {
      console.log(value);
    });

    // let array = [10, 20, 30];

    // console.log('for-of');
    // for (let index in array) {
    //   console.log(typeof (index));
    // }

    // console.log('for-in');
    // for (let value of array) {
    //   console.log(value);
    // }
  }

  ngOnInit() {

    // this.myPromise = new Promise(function (resolve, reject) {  // A
    //   this.result = Math.sin(15);
    //   resolve(this.result);
    //   console.log('in promise');
    // });

    // this.myPromise.then(function (val) {  // B
    //   console.log(val);
    // });

    // this.myPromise.catch(function (reason) {  // C
    //   console.log('error: ' + reason);
    // });
    // console.log('done');

    // this.promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('Async Work Complete');
    //     resolve();
    //   }, 1000);
    // });

    this.doSubmitForm(this.req).then((data) => {
      //  data = this.res;
      console.log(JSON.stringify(data));
    });
    /*  */
    let ab: string;
    ab = 'test';

  }

  doSubmitForm(value: any) {
    return new Promise((resolve, reject) => {
      //     // this.http.post('http://10.0.27.247:7001/bcelibankbackend/GetClientRequestServlet', JSON.stringify(value))
      //     // this.http.get('../../assets/example_data/dynamic-form.json')

      this.http.post('http://10.0.27.58/services.php', JSON.stringify(value))
        .subscribe(response => {
          console.log('response = ', JSON.stringify(response));
          resolve(response);

        }, (err) => {
          reject('error=' + err);
        }
        );
    });
  }
}
