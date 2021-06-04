import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const grapes = ['Grape 1', 'Grape 2', 'Grape 3'];

    of(...grapes).subscribe(console.log);

    of(...grapes).subscribe(
      grape => console.log(`Toma a ${grape}`),
      err => console.log(`Deu ruim: ${err}`),
      () => console.log('Cabô as grape')
    );

    from(grapes).subscribe(
      item => console.log(`Resulting item .. ${item}`),
      err => console.log(`Error occurred .. ${err}`),
      () => console.log('Cabô')
    );
  }
  name = 'Angular';
}
