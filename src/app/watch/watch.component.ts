import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent{
  // id: string | null

  // constructor(private route: ActivatedRoute) {
  //   this.id = null
  // }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.id = params['id']
  //   })
  // }

  constructor(private readonly route: ActivatedRoute) {
  }

  id: number | null = Number(this.route.snapshot.paramMap.get('id'))

  // 2 podejscie (subscribe wykorzystany w tle)
  id$ = this.route.params.pipe(switchMap((params) => params['id']))

}
