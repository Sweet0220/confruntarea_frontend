import { Component, OnInit } from '@angular/core';
import {ExcelService} from "../../../service/excel.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-admin-export',
  templateUrl: './admin-export.component.html',
  styleUrls: ['./admin-export.component.css'],
  providers: [DatePipe]
})
export class AdminExportComponent implements OnInit {

  constructor(private excelService: ExcelService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  exportAllEntitiesExcel() {
    this.excelService.exportAllEntities().subscribe(data => {
      this.downloadFile(data, "all_entities_");
    });
  }

  exportUsersExcel() {
    this.excelService.exportUsers().subscribe(data => {
      this.downloadFile(data, "users_");
    })
  }

  exportChampionsExcel() {
    this.excelService.exportChampions().subscribe(data => {
      this.downloadFile(data, "champions_");
    })
  }

  exportItemsExcel() {
    this.excelService.exportItems().subscribe(data => {
      this.downloadFile(data, "items_");
    })
  }

  exportAbilitiesExcel() {
    this.excelService.exportAbilities().subscribe(data => {
      this.downloadFile(data, "abilities_");
    })
  }

  exportMonstersExcel() {
    this.excelService.exportMonsters().subscribe(data => {
      this.downloadFile(data, "monsters_");
    })
  }

  downloadFile(data: any, filename: string) {
    let date: any = new Date();
    date = this.datePipe.transform(date, 'dd/MM/yyyy_hh:mm:ss');
    let name = filename + date.toString();
    const url = window.URL.createObjectURL(new Blob([data.body], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}));
    let link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
  }

}
