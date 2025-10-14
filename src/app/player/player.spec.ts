import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Player } from './player';

describe('Player', () => {
  let component: Player;
  let fixture: ComponentFixture<Player>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      _declarations: [Player],
      get declarations() {
        return this._declarations;
      },
      set declarations(value) {
        this._declarations = value;
      },
    })
    .compileComponents();

    fixture = TestBed.createComponent(Player);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

