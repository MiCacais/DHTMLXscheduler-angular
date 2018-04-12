import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core"
import "dhtmlx-scheduler";
import {} from "@types/dhtmlxscheduler";
import { EventService } from "../event.service";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

export class SchedulerComponent implements OnInit {
  @ViewChild("scheduler_here") schedulerContainer: ElementRef;

  data: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    scheduler.config.xml_date = "%Y-%m-%d %H:%i";
    scheduler.init(this.schedulerContainer.nativeElement);
    this.eventService.get('scheduler.json').subscribe(res => {
      this.data = res;
      scheduler.parse(this.data, "json");
    });
  }

}
