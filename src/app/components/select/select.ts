import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { City } from '../../interfaces/cities.interface';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './select.html',
  styleUrl: './select.sass'
})
export class Select implements OnInit {
  @Input() isOpenDropdown$!: Subject<boolean>;
  @Input() options: City[] = [];
  @Output() onSelect = new EventEmitter<string>();

  public localIsOpenDropdown: boolean = false;
  // public options = ['Kabul', 'Herat', 'Sharif'];

  private sub!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.sub = this.isOpenDropdown$.subscribe((value: boolean) => {
      console.log('Evento recibido desde el padre 🚀:', value);
      this.localIsOpenDropdown = value;
    });
  }

  @HostListener('document:click', ['$event'])
  detectClick(event: MouseEvent) {
    const isInsideClick = this.elementRef.nativeElement.contains(event.target);

    if (!isInsideClick)
      this.localIsOpenDropdown = false;
  }

  public seleccionar(opt: string) {
    console.log("seleccionado:", opt);
    this.localIsOpenDropdown = false;
    this.onSelect.emit(opt);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
