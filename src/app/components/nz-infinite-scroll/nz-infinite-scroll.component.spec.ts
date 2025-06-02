import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NzInfiniteScrollComponent } from './nz-infinite-scroll.component'

describe('NzInfiniteScrollComponent', () => {
  let component: NzInfiniteScrollComponent
  let fixture: ComponentFixture<NzInfiniteScrollComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzInfiniteScrollComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(NzInfiniteScrollComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
