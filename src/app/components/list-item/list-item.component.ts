import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';
import {MatRipple} from '@angular/material/core';

@Component({
  selector: 'list-item',
    imports: [
        MatIcon,
        NgClass,
        MatRipple
    ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
    @Input() selected: boolean = false;
    @Input() icon: string = '';
    @Input() title: string = '';
}
