import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, AfterViewInit, OnChanges {
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() elementData!: T[];
  @Input() displayedColumns!: { [key: string]: string };
  @Input() totalElements: number = 0;
  @Input() pageSize: number = 8;
  @Input() pageIndex: number = 0;
  @Output() action = new EventEmitter<{ actionType: string, data?: T }>();
  @Output() page = new EventEmitter<PageEvent>();
  
  dataSource = new MatTableDataSource<T>();
  selectedRow?: T;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    this.dataSource.data = this.elementData;
  }
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  onRowClicked(row: T) {
    this.selectedRow = row;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  
  handleFabClick(actionType: string) {
    this.action.emit({
      actionType: actionType,
      data: this.selectedRow
    });
  }
  
  formatColumn(value: any): string {
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
      const date = new Date(value);
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      }).format(date);
    }

    return value.toString();
  }
  
  onPage(event: PageEvent) {
    this.page.emit(event);
  }

  get columnKeys(): string[] {
    return Object.keys(this.displayedColumns)
  }

}
