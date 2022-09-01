import {Component, OnInit, Renderer2} from '@angular/core';
import {ExcelService} from "../../../service/excel.service";
import {DatePipe} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-admin-export',
  templateUrl: './admin-export.component.html',
  styleUrls: ['./admin-export.component.css'],
  providers: [DatePipe]
})
export class AdminExportComponent implements OnInit {

  constructor(private excelService: ExcelService, private datePipe: DatePipe, private http: HttpClient, private renderer: Renderer2) { }

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

  downloadTemplateFile() {
    let name = "import_template.xlsx";
    this.http.get('assets/import-template/import_template.xlsx', {responseType: "blob"}).subscribe((data: any) => {
      const url = window.URL.createObjectURL(new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}));
      let link = document.createElement("a");
      link.href = url;
      link.download = name;
      link.click();
    })
  }

  selectChampionFile() {
    let message = <HTMLParagraphElement>document.getElementById("message");
    let link = <HTMLParagraphElement>document.getElementById("link");
    let fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    this.renderer.listen(fileInput, 'change', (event) => {
      // console.log(event.target.files[0].name);
      let name = event.target.files[0].name;
      this.excelService.importChampions(event.target.files[0]).subscribe(data => {
        if(data.status == 200) {
          message.innerHTML = "Successfully added all rows from " + name + " !";
          link.innerHTML = "";
        }

        if(data.status == 204) {
          message.innerHTML = "Excel file contains only already existing champions or invalid ones !";
          link.innerHTML = "";
        }

        if(data.status == 206) {
          message.innerHTML = data.body + " from " + name + " !";
          link.innerHTML = "download failed imports"
        }

      }, error => {
        message.innerHTML = error.error;
        link.innerHTML = "";
      });
    });
    fileInput.click();

  }

  downloadFailedChampions() {
    this.excelService.exportFailedChampions().subscribe(data => {
      this.downloadFile(data, "failed_champions_");
    })
  }

}
