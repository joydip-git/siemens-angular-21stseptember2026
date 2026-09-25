import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token-service';

@Component({
  imports: [RouterLink],
  selector: 'app-dash-board',
  styleUrl: './dash-board.css',
  templateUrl: './dash-board.html',
})
export class DashBoard {
  protected tokenSvc = inject(TokenService)
}
