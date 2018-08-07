import { Component, OnInit } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  userName = "";
  serverCreated = false;
  servers = ["Test server 1", "Test server 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

  onClickUserBtn() {
    this.userName = '';
  }
}
