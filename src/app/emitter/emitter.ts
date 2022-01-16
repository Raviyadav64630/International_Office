import {EventEmitter} from '@angular/core';

export class Emitters {
  static authEmitter = new EventEmitter<boolean>();
  static gotProfile = new EventEmitter<boolean>();
  static createProfile = new EventEmitter<boolean>();
}