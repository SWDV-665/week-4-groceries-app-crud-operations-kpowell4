import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemModal} from './item-modal.page';

describe('ItemModalPage', () => {
  let component: ItemModal;
  let fixture: ComponentFixture<ItemModal>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
