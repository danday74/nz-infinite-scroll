import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyComponentComponent } from './my-component.component'

describe('MyComponentComponent', () => {
  let component: MyComponentComponent
  let fixture: ComponentFixture<MyComponentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyComponentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
