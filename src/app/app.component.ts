import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const grapes = ['Grape 1', 'Grape 2', 'Grape 3'];
    const nums = [1, 2, 3, 4];

    console.log(">>> Example of 'of' simple");
    of(...grapes).subscribe(console.log);

    console.log(">>> Example of 'of' with complete subscribe");
    of(...grapes).subscribe(
      grape => console.log(`Toma a ${grape}`),
      err => console.log(`Deu ruim: ${err}`),
      () => console.log('Cabô as grape')
    );

    console.log(">>> Example of 'from' with complete subscribe");
    from(grapes).subscribe(
      item => console.log(`Resulting item .. ${item}`),
      err => console.log(`Error occurred .. ${err}`),
      () => console.log('Cabô')
    );

    console.log(
      ">>> Example of 'from' with complete subscribe and pipe functions"
    );
    of(...nums)
      .pipe(
        take(3),
        map(item => {
          const n = item - 2;
          if (n === 0) {
            throw new Error(`Erro quando subtrai 2 de ${item} e dá ${n}`);
          }

          return item;
        }),
        tap(item => console.log(`Debug it: ${item}`))
      )
      .subscribe(
        num => console.log(`The number is ${num}`),
        err => console.log(`Deu ruim: ${err}`),
        () => console.log('Cabô os erros')
      );
  }
  name = 'Angular';
}
