import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector   : 'my-app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
    public tabs = [1, 2];

    public active: number = 1;

    public dec() {
        this.tabs = this.tabs.slice(0, -1);
    }

    public inc() {
        this.tabs = [...this.tabs, (this.tabs.length + 1)];
    }

    public isActive(tab: number): boolean {
        return tab === this.getActive();
    }

    public activate(tab: number): void {
        this.active = tab;
    }

    private getActive(): number {
        if (!this.tabs.includes(this.active)) {
            this.active = this.tabs[this.tabs.length - 1];
        }

        return this.active;
    }
}
