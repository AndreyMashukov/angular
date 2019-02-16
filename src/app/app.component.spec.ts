import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TestComponent} from './test.component';

describe('AComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, TestComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow to activate tab', () => {
        expect(component).toBeTruthy();

        expect(component.isActive(2)).toBeFalsy();
        component.activate(2);
        expect(component.isActive(2)).toBeTruthy();
    });

    it('first tab should be activated if another tabs is deleted.', () => {
        expect(component).toBeTruthy();

        expect(component.isActive(1)).toBeTruthy();
        expect(component.isActive(2)).toBeFalsy();
        component.activate(2);
        expect(component.isActive(1)).toBeFalsy();
        expect(component.isActive(2)).toBeTruthy();
        component.dec();
        expect(component.isActive(1)).toBeTruthy();
    });
});
