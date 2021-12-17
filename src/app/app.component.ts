import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'alore';
  segments = [
    {id:1, text: 'Segment 1', desc:"", emoji: {name:"santa"}, childs: []},
    {id:2, text: 'Segment 2', desc:"", emoji: {name:"grinning"}, childs: [{id:1, emoji:{name:"santa"},color:"rgba(207, 223, 255, 1)", desc:"Newyork-ITeS-11-50"}, {id:2, emoji:{name:"joy"},color:"rgba(49, 255, 0, 1)", desc:"Newyork-ITeS-11-50"} ]},
    {id:3, text: 'Segment 3', desc:"", emoji: {name:"thumbsup"}, childs: [{id:1, emoji:{name:"santa"},color:"rgba(156, 199, 255, 1)", desc:"Newyork-ITeS-11-50"}]},
    {id:4, text: 'Segment 4', desc:"", emoji: {name:"innocent"}, childs: [{id:1, emoji:{name:"santa"},color:"rgba(255, 127, 249, 1)", desc:"Newyork-ITeS-11-50"}]},
    {id:5, text: 'Segment 5', desc:"", emoji: {name:"joy"}, childs: [{id:1, emoji:{name:"santa"},color:"rgba(0, 103, 255, 1)", desc:"Newyork-ITeS-11-50"}]},
  ];
  colorPalette = [
  'rgba(207, 223, 255, 1)', 'rgba(156, 199, 255, 1)', 'rgba(45, 127, 249, 1)', 'rgba(0, 103, 255, 1)', 'rgba(0, 84, 209, 1)',

  'rgba(208, 240, 253, 1)', 'rgba(119, 209, 243, 1)', 'rgba(24, 191, 255, 1)', 'rgba(64, 131, 172, 1)', 'rgba(11, 118, 183, 1)',

  'rgba(194, 245, 233, 1)', 'rgba(114, 221, 195, 1)', 'rgba(32, 217, 210, 1)', 'rgba(123, 200, 195, 1)', 'rgba(6, 160, 155, 1)',

  'rgba(255, 179, 200, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 0, 73, 1)', 'rgba(218, 2, 64, 1)',

  'rgba(255, 227, 175, 1)', 'rgba(255, 214, 140, 1)', 'rgba(255, 197, 92, 1)', 'rgba(253, 178, 43, 1)', 'rgba(232, 149, 0, 1)',

  'rgba(255, 159, 242, 1)', 'rgba(254, 103, 233, 1)', 'rgba(246, 56, 220, 1)', 'rgba(255, 0, 220, 1)', 'rgba(214, 0, 184, 1)',

  'rgba(255, 181, 152, 1)', 'rgba(255, 158, 121, 1)', 'rgba(255, 120, 68, 1)', 'rgba(255, 71, 0, 1)', 'rgba(197, 55, 0, 1)',

  'rgba(175, 181, 255, 1)', 'rgba(142, 150, 255, 1)', 'rgba(107, 118, 255, 1)', 'rgba(49, 64, 255, 1)', 'rgba(0, 19, 255, 1)',

  'rgba(131, 204, 139, 1)', 'rgba(97, 199, 108, 1)', 'rgba(32, 201, 51, 1)', 'rgba(0, 181, 20, 1)', 'rgba(51, 138, 23, 1)',

  'rgba(238, 238, 238, 1)', 'rgba(204, 204, 204, 1)', 'rgba(172, 172, 172, 1)', 'rgba(102, 102, 102, 1)', 'rgba(68, 68, 68, 1)'
  ];
  filteredSegments = [] as any;

  showModalTable = false;
  showModalSegment = false;

  segmentName = '';
  errorSegmentName = false;
  segmentIcon = '+1';
  segmentDescription = '';

  chosenSegment: any;

  tableName = '';
  errorTableName = false;
  tableIcon = '+1';
  tableIconColor = 'rgba(207, 223, 255, 1)';

  isOpenEmojiMartSegment = false;
  isOpenEmojiMartTable = false;
  isOpenColorPickerTable = false;

  ngOnInit(): void {
    this.filteredSegments.shift();
  }

  openModalTable(id: any){
    this.showModalTable = true;
    this.chosenSegment = id;
  }

  closeModalTable(){
    this.showModalTable = false;
  }

  openModalSegment(){
    this.showModalSegment = true;
  }

  closeModalSegment(){
    this.showModalSegment = false;
  }

  openColorPicker(){
    this.isOpenColorPickerTable = !this.isOpenColorPickerTable;
  }

  openEmojiMartTable(){
    this.isOpenEmojiMartTable = !this.isOpenEmojiMartTable;
  }

  changeColor(chosenColor = ''){
    this.tableIconColor = chosenColor;
    this.isOpenColorPickerTable = false;
  }

  changeTableName(event: any){
    if (event.target.value) {
      this.tableName = event.target.value;
      this.errorTableName = false;      
    } else {
      this.errorTableName = true
    }
  }
  
  changeEmojiTable(event:any){
    this.tableIcon = event.emoji.id;
    this.isOpenEmojiMartTable = false;
  }

  addTable(){
    if (this.tableName) {
      let tableId = this.chosenSegment?.childs?.length + 1;
      this.chosenSegment.childs.push({id:tableId, emoji:{name:this.tableIcon},color:this.tableIconColor, desc:this.tableName});
      this.showModalTable = !this.showModalTable;
    } else {
      this.errorTableName = true;
    }
  }

  changeSegmentName(event: any){
    if (event.target.value) {
      this.segmentName = event.target.value;
      this.errorSegmentName = false;      
    } else {
      this.errorSegmentName = true
    }
  }

  openEmojiMartSegment(){
    this.isOpenEmojiMartSegment = !this.isOpenEmojiMartSegment;
  }

  changeEmojiSegment(event:any){
    this.segmentIcon = event.emoji.id;
    this.isOpenEmojiMartSegment = false;
  }

  changeSegmentDescription(event: any){
    this.segmentDescription = event.target.value;
  }

  addSegment(){
    if (this.segmentName) {
      let segmentId = this.segments?.length + 1;
      this.segments.push({id:segmentId, text: this.segmentName, desc:this.segmentDescription, emoji: {name:this.segmentIcon}, childs: []});
      this.showModalSegment = !this.showModalSegment;
    } else {
      this.errorSegmentName = true;
    }
  }

  filter(event:any){
    let query = event.target.value;
    query = query.toUpperCase();
    let filtered = [] as any;
    filtered.shift();
    if (query) {
      this.segments.forEach(segment => {
        if(segment.text.toUpperCase().search(query)>=0){
          filtered.push(segment);
        } else {
          let childs = segment.childs;
          let isBreak = false;
          childs.forEach(child => {
            if (!isBreak) {
              if (child.desc.toUpperCase().search(query)>=0) {
                filtered.push(segment);
                isBreak = true;
              } 
            }
          });
        }
      });      
    }
    this.filteredSegments = filtered;
    console.log(this.filteredSegments.length);
    
  }
}
