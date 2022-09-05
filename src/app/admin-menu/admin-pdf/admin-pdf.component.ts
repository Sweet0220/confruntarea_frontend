import { Component, OnInit } from '@angular/core';
import {PdfService} from "../../../service/pdf.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-admin-pdf',
  templateUrl: './admin-pdf.component.html',
  styleUrls: ['./admin-pdf.component.css'],
  providers: [DatePipe]
})
export class AdminPdfComponent implements OnInit {

  constructor(private pdfService: PdfService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  exportUsersPdf() {
    this.pdfService.exportUsers().subscribe(data => {
      this.downloadFile(data, "users_");
    })
  }

  exportChampionsPdf() {
    this.pdfService.exportChampions().subscribe(data => {
      this.downloadFile(data, "champions_");
    })
  }

  exportItemsPdf() {
    this.pdfService.exportItems().subscribe(data => {
      this.downloadFile(data, "items_");
    })
  }

  exportAbilitiesPdf() {
    this.pdfService.exportAbilities().subscribe(data => {
      this.downloadFile(data, "abilities_");
    })
  }

  exportMonstersPdf() {
    this.pdfService.exportMonsters().subscribe(data => {
      this.downloadFile(data, "monsters_");
    })
  }

  downloadFile(data: any, filename: string) {
    let date: any = new Date();
    date = this.datePipe.transform(date, 'dd/MM/yyyy_hh:mm:ss');
    let name = filename + date.toString();
    const url = window.URL.createObjectURL(new Blob([data.body], {type: "application/pdf"}));
    let link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
  }

}
