import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Site } from 'app/core/models';
import { SiteService } from '../../services/site.service';
import { SiteEditComponent } from '../site-edit/site-edit.component';

@Component({
  selector: 'app-site-table',
  templateUrl: './site-table.component.html',
  styleUrls: ['./site-table.component.css']
})
export class SiteTableComponent implements OnInit {

  @Input() sites!: Site[]; 

  constructor(public siteService: SiteService, public modalService: NgbModal) { }

  onDeleteSite(site: Site) {
    this.siteService.deleteSite(site);
  }

  onEditSite(site: Site) {
    const modalRef = this.modalService.open(SiteEditComponent)
    modalRef.componentInstance.site = {...site};
  }

  ngOnInit(): void {
  }

}
