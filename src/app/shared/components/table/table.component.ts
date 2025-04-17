import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
  @Input() elementData!: T[]
  @Input() displayedColumns!: { [key: string]: string };
  @Output() action = new EventEmitter<{ click: string }>();

  dataSource = new MatTableDataSource<T>();
  selectedRow: T | null = null;

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

  get columnKeys(): string[] {
    return Object.keys(this.displayedColumns)
  }


}
